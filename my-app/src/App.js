import './App.css'
import Dialogs from './Dialogs/Dialogs'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './Sidebar/Settings/Settings'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Dialogs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
