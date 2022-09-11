//@ts-ignore
import s from './Settings.module.css'

const Settings: React.FC<propsType> = (props) => {
  return (
    <div className={s.settings}>
      <div>Settings</div>
    </div>
  )
}

export default Settings

//-------------------------------- types --------------------------------

type propsType = {}
