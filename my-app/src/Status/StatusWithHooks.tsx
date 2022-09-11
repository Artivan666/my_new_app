import React, { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
//@ts-ignore
import s from './Status.module.css'

const StatusWitnHooks: React.FC<propsType> = (props) => {
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

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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

//---------------------------------- types --------------------------------

type propsType = {
  status: string
  updateUserStatus: (status: string) => void
}
