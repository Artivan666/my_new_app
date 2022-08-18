import { connect } from 'react-redux'
import { addPostAC } from '../../redux/profile-reducer'
import Posts from './Posts'

// запускается каждый раз при изменении в state
const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => ({
  addPost(newPost) {
    dispatch(addPostAC(newPost))
  },
})
let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
