import React, { Component } from 'react';


import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="left-container">
                    <div className="title">{this.props.title}</div>
                    <div className="company">{this.props.company}</div>
                </div>
                <div className="right-container">
                    <div className="tag">{this.props.tag}</div>
                    <div className="tag">{this.props.tag}</div>
                    <div className="tag">{this.props.tag}</div>
                </div>
            </div>
        );
    }
}

export default Card;
