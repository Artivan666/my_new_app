import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {
  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} />)

  const newPostElement = React.createRef()

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
  }

  const addPost = () => {
    props.dispatch({ type: 'ADD-POST' })
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
