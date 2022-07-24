import './App.css'
import Dialogs from './Dialogs/Dialogs'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />
      <div className="content">
        <Profile />
        {/* <Dialogs /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
