import s from './Preloader.module.css'
import preloader from '../../images/preloader.gif'

const Preloader = (props) => {
  return (
    <div className={s.preloader}>
      {props.isFetching ? <img src={preloader} /> : null}
    </div>
  )
}

export default Preloader
