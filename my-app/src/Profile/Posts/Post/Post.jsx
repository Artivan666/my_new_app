import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div>
        <img src="https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D0%B2-%D0%BC%D0%BE%D0%B4%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B5-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%BE%D0%BC-188284182.jpg"></img>
      </div>
      <div>{props.message}</div>
    </div>
  )
}

export default Post
