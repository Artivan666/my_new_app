// import { Formik, Form, Field } from 'formik'
// import { filterType } from '../../redux/users-reducer'
// //@ts-ignore
// import s from './UsersSearchForm.module.css'

// const userSearchFormValidate = (values: any) => {
//   const errors = {}

//   return errors
// }

// type formType = {
//   term: string
//   friend: 'true' | 'false' | 'null'
// }

// const UsersSearchForm: React.FC<propsType> = (props) => {
//   const submit = (
//     values: formType,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => {
//     const filter: filterType = {
//       term: values.term,
//       friend:
//         values.friend === 'null'
//           ? null
//           : values.friend === 'true'
//           ? true
//           : false,
//     }
//     props.onFilterChanged(filter)
//     setSubmitting(false)
//   }

//   return (
//     <div className={s.usersSearchForm}>
//       <Formik
//         initialValues={{ term: '', friend: 'null' }}
//         validate={userSearchFormValidate}
//         onSubmit={submit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="term" />
//             <Field name="friend" as="select">
//               <option value="null">All</option>
//               <option value="true">Only followed</option>
//               <option value="false">Only unfollowed</option>
//             </Field>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   )
// }

// export default UsersSearchForm

// // -------------------------------- types -------------------------------

// type propsType = {
//   onFilterChanged: (filter: filterType) => void
// }

//---------------------------------------------------------------

import { Field, Form, Formik } from 'formik'
import React from 'react'
import { filterType } from '../../redux/users-reducer'
import { useSelector } from 'react-redux'
import { getUsersFilter } from '../../redux/users-selectors'

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
}

type PropsType = {
  onFilterChanged: (filter: filterType) => void
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  const filter = useSelector(getUsersFilter)
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const filter: filterType = {
      term: values.term,
      friend:
        values.friend === 'null'
          ? null
          : values.friend === 'true'
          ? true
          : false,
    }

    props.onFilterChanged(filter)
    setSubmitting(false)
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          term: filter.term,
          friend: String(filter.friend) as FriendFormType,
        }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />

            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
})

export default UsersSearchForm
