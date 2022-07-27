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
                dispatch={props.dispatch}
                newPostText={props.state.profilePage.newPostText}
                posts={props.state.profilePage.posts}
              />
            }
          />
          <Route
            path="/messages"
            element={
              <Dialogs
                dispatch={props.dispatch}
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
                newMessageText={props.state.dialogsPage.newMessageText}
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
