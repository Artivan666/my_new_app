//@ts-ignore
import s from './Footer.module.css'

const Footer: React.FC<propsType> = (props) => {
  return (
    <div className={s.footer}>
      <div>Footer</div>
    </div>
  )
}

export default Footer

// -------------------------------- types ------------------------------

type propsType = {}
