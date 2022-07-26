import './App.css'
import Dialogs from './Dialogs/Dialogs'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './Settings/Settings'

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                newPostText={props.state.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
                posts={props.state.profilePage.posts}
              />
            }
          />
          <Route
            path="/messages"
            element={
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
