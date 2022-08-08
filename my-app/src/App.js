import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Settings from './Settings/Settings'
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/usersContainer'

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
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
