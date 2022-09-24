import { responseType, resultCodeEnum, usersAPI } from '../api/api'
import { actions, follow, unfollow } from './users-reducer'

jest.mock('../api/api')

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: responseType = {
  resultCode: resultCodeEnum.Success,
  messages: [],
  data: {},
}

test('Success follow thunk', async () => {
  const thunk = follow(1)

  userAPIMock.follow.mockReturnValue(Promise.resolve(result))

  // create fake function for dispatch
  const dispatch = jest.fn()
  const getState = jest.fn()

  await thunk(dispatch, getState, null)

  expect(dispatch).toBeCalledTimes(3)

  expect(dispatch).toHaveBeenNthCalledWith(
    1,
    actions.toggleFollowingProgress(true, 1) // second param - number of call
  )
  expect(dispatch).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatch).toHaveBeenNthCalledWith(
    3,
    actions.toggleFollowingProgress(false, 1)
  )
})

test('Success unfollow thunk', async () => {
  const thunk = unfollow(1)

  userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

  // create fake function for dispatch
  const dispatch = jest.fn()
  const getState = jest.fn()

  await thunk(dispatch, getState, null)

  expect(dispatch).toBeCalledTimes(3)

  expect(dispatch).toHaveBeenNthCalledWith(
    1,
    actions.toggleFollowingProgress(true, 1) // second param - number of call
  )
  expect(dispatch).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
  expect(dispatch).toHaveBeenNthCalledWith(
    3,
    actions.toggleFollowingProgress(false, 1)
  )
})
