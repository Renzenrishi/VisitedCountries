import './index.css'

const CountryListItem = props => {
  const {details, changeActiveId, isActive} = props

  const {id, name} = details

  return (
    <li className="list-item">
      <p>{name}</p>
      {isActive ? (
        <p>Visited</p>
      ) : (
        <button
          type="button"
          className="visit-btn"
          onClick={() => changeActiveId(id)}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryListItem
