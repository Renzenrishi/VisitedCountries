import './index.css'

const VisitedCountryItem = props => {
  const {details, removeItem} = props

  const {id, imageUrl, name} = details

  return (
    <li className="flag-item">
      <img src={imageUrl} alt="thumbnail" className="flag" />
      <div className="desc-container">
        <p>{name}</p>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
