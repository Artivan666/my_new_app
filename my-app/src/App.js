import './App.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Settings from './Settings/Settings'
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer'
import HeaderContainer from './Header/HeaderContainer'
import Login from './Login/Login'
import React from 'react'
import { connect } from 'react-redux'
import { initialize } from './redux/app-reducer'
import Preloader from './common/Preloader/Preloader'

class App extends React.Component {
  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.initialized) {
      return <div>Loading...</div>
    }

    return (
      <div className="app_wrapper">
        =
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/login" element={<Login />} />
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initialize })(App)
