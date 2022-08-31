import './App.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
// import Settings from './Settings/Settings'
// import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer'
import HeaderContainer from './Header/HeaderContainer'
import Login from './Login/Login'
import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { initialize } from './redux/app-reducer'
// Lazy
const Settings = React.lazy(() => import('./Settings/Settings'))
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'))

class App extends React.Component {
  // здесь можно делать сайд эффект
  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.initialized) {
      return <div>Loading...</div>
    }

    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="*" element={<div>404 Not found</div>} />
            <Route
              path="/messages"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                </Suspense>
              }
            />
            <Route path="/users" element={<UsersContainer />} />
            <Route
              path="/settings"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Settings />
                </Suspense>
              }
            />
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
