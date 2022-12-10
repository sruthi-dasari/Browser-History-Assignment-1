import './index.css'
import {Component} from 'react'

class BrowserItem extends Component {
  onDelete = () => {
    const {deleteItem, itemContainer} = this.props
    const {id} = itemContainer
    deleteItem(id)
  }

  render() {
    const {itemContainer} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = itemContainer

    return (
      <li className="list-item">
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
        <button
          testid="delete"
          onClick={this.onDelete}
          type="button"
          className="delete-btn"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default BrowserItem
