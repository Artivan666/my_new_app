//@ts-ignore
import s from './Preloader.module.css'
//@ts-ignore
import preloader from '../../images/preloader.gif'

const Preloader: React.FC<propsType> = ({ isFetching }) => {
  return (
    <div className={s.preloader}>
      {isFetching ? <img src={preloader} /> : null}
    </div>
  )
}

export default Preloader

//------------------------------------- types ---------------------------------

type propsType = {
  isFetching: boolean
}
