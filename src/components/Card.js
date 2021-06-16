import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        return (
            <div className="cardContainer">
                { this.props.addToCard.map((cardInfo) =>(
                    <div key={cardInfo} className="card">
                        <i onClick={this.props.correctToCard} className="fas fa-check-square" id="correct"></i>
                        <h1>{cardInfo}</h1>
                        <i onClick={this.props.removeToCard} className="fas fa-trash delete" id={cardInfo}></i>
                    </div>
                ))}
            </div>
        )
    }
}
