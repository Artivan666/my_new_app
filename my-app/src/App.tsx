import './App.css'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Route, Navigate, Routes } from 'react-router-dom'
// import Settings from './Settings/Settings'
// import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './Profile/ProfileContainer'
import Login from './Login/Login'
import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { initialize } from './redux/app-reducer'
import { appStateType } from './redux/redux-store'
import HeaderContainer from './Header/HeaderContainer'
// Lazy
const Settings = React.lazy(() => import('./Settings/Settings'))
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'))

class App extends React.Component<mapStatePropsType & mapDispatchPropsType> {
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
            <Route
              path="/users"
              element={<UsersContainer pageTitle={'Hello!'} />}
            />
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

const mapStateToProps = (state: appStateType) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initialize })(App)

type mapStatePropsType = {
  initialized: boolean
}

type mapDispatchPropsType = {
  initialize: () => void
}
