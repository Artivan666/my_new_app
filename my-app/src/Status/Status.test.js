import { create } from 'react-test-renderer'
import Status from './Status'

// Только классовый компоненты

describe('Test 1', () => {
  test('Status from props', () => {
    const component = create(<Status status="Hello!!!" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('Hello!!!')
  })

  test('Test 2', () => {
    const component = create(<Status status="Hello!!!" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('Test 3  ', () => {
    const component = create(<Status status="Hello!!!" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('Hello!!!')
  })

  test('Test 4', () => {
    const component = create(<Status status="Hello!!!" />)
    const root = component.root

    expect(() => {
      const input = root.findByType('input')
    }).toThrow()
  })

  test('Test 5', () => {
    const component = create(<Status status="Hello!!!" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('Hello!!!')
  })

  test('Test 6', () => {
    const component = create(<Status status="Hello!!!" />)
    const root = component.root
    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')
    expect(input.props.value).toBe('Hello!!!')
  })

  test('Test 7', () => {
    const mockCallBack = jest.fn()
    const component = create(
      <Status status="Hello!!!" updateUserStatus={mockCallBack} />
    )
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallBack.mock.calls.length).toBe(1)
  })
})
