import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Textarea from '../../common/formsControl/FormsControl'
import {
  maxLengthCreator,
  requiredField,
} from '../../utils/validators/validators'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {
  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} />)

  const newPostElement = React.createRef()

  const addNewPost = (values) => {
    console.log(values.newPost)
    props.addPost(values.newPost)
  }

  return (
    <div className={s.block_post}>
      Posts
      <div className={s.new_post}>
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={s.post_list}>{posts}</div>
    </div>
  )
}

export default Posts

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPost"
        placeholder="Post message"
        validate={[requiredField, maxLength10]}
      />
      <button>Add new post</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: 'newPostForm' })(AddPostForm)
