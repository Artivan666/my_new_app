import React from 'react'
import { addPostAC, updateNewPostTextAC } from '../../redux/profile-reducer'
import StoreContext from '../../StoreContext'
import Post from './Post/Post'
import Posts from './Posts'

const PostsContainer = (props) => {
  const newPostElement = React.createRef()

  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextAC(text))
        }

        const addPost = () => {
          store.dispatch(addPostAC())
        }

        return (
          <Posts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default PostsContainer
