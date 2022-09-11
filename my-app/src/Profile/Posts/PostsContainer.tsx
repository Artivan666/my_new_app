import { connect } from 'react-redux'
import { actions } from '../../redux/profile-reducer'
import { appStateType } from '../../redux/redux-store'
import Posts from './Posts'

// запускается каждый раз при изменении в state
const mapStateToProps = (state: appStateType) => ({
  posts: state.profilePage.posts,
})

let PostsContainer = connect(mapStateToProps, { addPost: actions.addPost })(
  Posts
)

export default PostsContainer
