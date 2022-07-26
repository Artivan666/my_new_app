import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { addPost, updateNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateNewPostText={updateNewPostText}
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}
