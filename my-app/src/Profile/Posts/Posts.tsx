import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Textarea } from '../../common/formsControl/FormsControl'
import { photosType } from '../../Overall_types/overall-types'
import { postType } from '../../redux/profile-reducer'
import {
  maxLengthCreator,
  requiredField,
} from '../../utils/validators/validators'
import Post from './Post/Post'
//@ts-ignore
import s from './Posts.module.css'

// 1. компонента loginForm принимает заинжекченные пропсы InjectedFormProps
// какие именно пропсы собирает форма(то что будет сабмитится)
// : React.FC<
//   InjectedFormProps<loginFormValuesType, loginFormOwnPropsType> &
//   loginFormOwnPropsType
// >
// 2. описываем данные которые сабмитит форма
// 3. описываем типы для name филдов
// 4. reduxForm<myFormValuesType, myFormOwnPropsType>({
// form: 'myForm',
// })(ComponentContainForm)
//
//
//
//
//
//

const maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<
  InjectedFormProps<addNewPostFormValuesType, loginFormOwnPropsType> &
    loginFormOwnPropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField<addNewPostFormFieldsNameType>(
        Textarea,
        'newPost',
        [requiredField, maxLength10],
        'Post message'
      )}

      <button>Add new post</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm<
  addNewPostFormValuesType,
  loginFormOwnPropsType
>({ form: 'newPostForm' })(AddPostForm)

const Posts: React.FC<propsType> = (props) => {
  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} />)

  const newPostElement = React.createRef()

  const addNewPost = (formData: addNewPostFormValuesType) => {
    props.addPost(formData.newPost)
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

//------------------------------------ types --------------------------------

type propsType = {
  posts: Array<postType>
  addPost: (newPostText: string) => void
}

// types for form

type addNewPostFormValuesType = {
  newPost: string
}

type loginFormOwnPropsType = {}

// типизируем ключи (name) для филдов
type addNewPostFormFieldsNameType = Extract<
  keyof addNewPostFormValuesType,
  string
>

// mapType
