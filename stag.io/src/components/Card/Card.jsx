import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    renderTag() {
        let myTags = [];
        myTags = this.props.tag;

        if (myTags.length >= 3) {
            return (
                <div className="right-container">
                    <span className="tag">{myTags[0]}</span>
                    <span className="tag">{myTags[1]}</span>
                    <span className="tag">{myTags[2]}</span>
                </div>
            )
        }
        if (myTags.length == 2) {
            return (
                <div>
                    <span className="tag">{myTags[0]}</span>
                    <span className="tag">{myTags[1]}</span>
                </div>
            )
        }
        return <span className="tag">{myTags[0]}</span>
    }

    render() {

        return (
            <div className="card-container" onClick={() => { window.location.href = this.props.proximaPagina; }}>
                <div className="left-container">
                    <div className="title_card">{this.props.title}</div>
                    <div className="company">{this.props.company}</div>
                </div>
                {this.renderTag()}
            </div>
        );
    }
}

export default Card;
