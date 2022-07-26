import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <Posts
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
        newPostText={props.newPostText}
        posts={props.posts}
      />
    </div>
  )
}

export default Profile
