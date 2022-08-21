import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import s from './Status.module.css'

const StatusWitnHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
    props.updateUserStatus(status)
  }

  return (
    <div className={s.status}>
      {editMode ? (
        <input
          onChange={onStatusChange}
          value={status}
          autoFocus={true}
          onBlur={deactivateEditMode}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>
          {props.status ? props.status : '---'}
        </span>
      )}
    </div>
  )
}

export default StatusWitnHooks
