import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const postData = [
  { id: 1, message: 'Hello!' },
  { id: 2, message: 'Haw are you?' },
  { id: 3, message: 'yo!' },
  { id: 4, message: 'blabla' },
]

const dialogsData = [
  { id: 1, name: 'Dimuch' },
  { id: 2, name: 'Andrew' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Liza' },
]

const messagesData = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'Haw are you?' },
  { id: 3, message: 'Lets go!' },
  { id: 4, message: 'Hello!!!!!!' },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App posts={postData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
