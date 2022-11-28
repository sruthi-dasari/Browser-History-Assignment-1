import {Component} from 'react'
import './index.css'
import BrowserItem from '../BrowserItem'

class BrowserSearch extends Component {
  state = {searchInput: '', HistoryList: initialHistoryList}

  deleteItem = id => {
    const {HistoryList} = this.state

    const filteredHistoryList = HistoryList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({HistoryList: filteredHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.map(
      eachItem => eachItem.title.toLowerCase() === searchInput.toLowerCase(),
    )
    return (
      <div className="app-container">
        <div className="navbar">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img className="search-icon" src="" alt="search" />
            <input className="searchInput" type="search" />
          </div>
        </div>

        <div className="bottom-container">
          <div className="history-items-container">
            {searchResults.map(eachItem => (
              <BrowserItem
                itemContainer={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem(initialHistoryList)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserSearch
