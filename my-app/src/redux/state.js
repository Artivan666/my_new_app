import { rerenderEntireTree } from '../render'

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello!' },
      { id: 2, message: 'Haw are you?' },
      { id: 3, message: 'yo!' },
      { id: 4, message: 'blabla' },
    ],
    newPostText: '',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimuch' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Liza' },
    ],

    messages: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'Haw are you?' },
      { id: 3, message: 'Lets go!' },
      { id: 4, message: 'Hello!!!!!!' },
    ],
  },
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const addPost = () => {
  const newPost = { id: 5, message: state.profilePage.newPostText }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
  state.profilePage.newPostText = ''
}

export default state
