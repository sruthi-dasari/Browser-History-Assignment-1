import './index.css'
import {Component} from 'react'

class BrowserItem extends Component {
  onDelete = () => {
    const {deleteItem} = this.props
    const {itemContainer} = this.props
    const {id} = itemContainer
    deleteItem(id)
  }

  render() {
    const {itemContainer} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = itemContainer

    return (
      <li>
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <h1 className="title">{title}</h1>
        <p className="domain">{domainUrl}</p>
        <img
          className="delete-icon"
          onClick={this.onDelete}
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </li>
    )
  }
}

export default BrowserItem
