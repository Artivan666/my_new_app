import './App.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Settings from './Settings/Settings'
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer'
import HeaderContainer from './Header/HeaderContainer'

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/messages" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
