import { useState } from 'react'
//@ts-ignore
import s from './Paginator.module.css'

type propsType = {
  totalUsersCount: number
  pageSize: number
  portionSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<propsType> = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let [currentPortion, setCurrentPortion] = useState(1)

  const portionCount = Math.ceil(pagesCount / props.portionSize)
  let leftPortionPageNumber = (currentPortion - 1) * props.portionSize + 1
  let rightPortionPageNumber = currentPortion * props.portionSize

  return (
    <div className={s.pagination}>
      {currentPortion > 1 ? (
        <button
          onClick={() => {
            setCurrentPortion(currentPortion - 1)
          }}
        >
          prev
        </button>
      ) : null}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
          <button
            key={p}
            className={props.currentPage == p ? s.selected : null}
            onClick={() => {
              props.onPageChanged(p)
            }}
          >
            {p}
          </button>
        ))}
      {portionCount > currentPortion ? (
        <button
          onClick={() => {
            setCurrentPortion(currentPortion + 1)
          }}
        >
          next
        </button>
      ) : null}
    </div>
  )
}

export default Paginator
