import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.changeInput} className="searchBar" type="text" placeholder="Görev Giriniz"></input>
                <button onClick={this.props.addToValue} className="apply">Ekle</button>
            </div>
        )
    }
}
