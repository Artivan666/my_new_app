import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {
  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} />)

  return (
    <div className={s.block_post}>
      Posts
      <div className={s.new_post}>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div className={s.post_list}>{posts}</div>
    </div>
  )
}

export default Posts
