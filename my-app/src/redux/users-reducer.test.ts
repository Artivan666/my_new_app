import usersReducer, {
  actions,
  initialStateType,
  userType,
} from './users-reducer'

let state: initialStateType

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'Alex',
        followed: false,
        photos: { small: null, large: null },
        status: 'status 0',
      },
      {
        id: 1,
        name: 'Stive',
        followed: false,
        photos: { small: null, large: null },
        status: 'status 1',
      },
      {
        id: 2,
        name: 'Fred',
        followed: true,
        photos: { small: null, large: null },
        status: 'status 2',
      },
      {
        id: 3,
        name: 'Frank',
        followed: false,
        photos: { small: null, large: null },
        status: 'status 3',
      },
    ],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10,
  }
})

test('Follow success', () => {
  const newState = usersReducer(state, actions.followSuccess(1))
  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeTruthy()
})

test('Unfollow success', () => {
  const newState = usersReducer(state, actions.unfollowSuccess(2))
  expect(newState.users[2].followed).toBeFalsy()
})
