import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {
  return (
    <div className={s.block_post}>
      Posts
      <div className={s.new_post}>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div className={s.post_list}>
        <Post message="Hello!" />
        <Post message="Haw are you?" />
        <Post message="yo!" />
      </div>
    </div>
  )
}

export default Posts
