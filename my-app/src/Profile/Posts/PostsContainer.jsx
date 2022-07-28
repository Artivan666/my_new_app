import { connect } from 'react-redux'
import { addPostAC, updateNewPostTextAC } from '../../redux/profile-reducer'
import Posts from './Posts'

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostTex,
})

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText(text) {
    dispatch(updateNewPostTextAC(text))
  },
  addPost() {
    dispatch(addPostAC())
  },
})
let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
