import s from './Paginator.module.css'

const Paginator = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map((p) => (
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
      </div>
    </div>
  )
}

export default Paginator
