import React from 'react'
import s from './Status.module.css'

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  //   console.log('update')
  // }

  render() {
    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange}
            value={this.state.status}
          />
        ) : (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status ? this.props.status : '---'}
          </span>
        )}
      </div>
    )
  }
}

export default Status
