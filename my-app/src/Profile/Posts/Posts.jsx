import React from 'react'
import { addPostAC, updateNewPostTextAC } from '../../redux/state'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {
  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} />)

  const newPostElement = React.createRef()

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.dispatch(updateNewPostTextAC(text))
  }

  const addPost = () => {
    props.dispatch(addPostAC())
  }

  return (
    <div className={s.block_post}>
      Posts
      <div className={s.new_post}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add new post</button>
      </div>
      <div className={s.post_list}>{posts}</div>
    </div>
  )
}

export default Posts
