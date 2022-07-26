let store = {
  _state: {
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
  },

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('State was changed')
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  addPost() {
    const newPost = { id: 5, message: this._state.profilePage.newPostText }
    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
    this._state.profilePage.newPostText = ''
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
}

window.store = store

export default store
