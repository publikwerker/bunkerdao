import React from "react";
import './Card.css';

export default class Card extends React.Component {

    render() {
        return (
            <div className='card'>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"></img></a>
            <h2 className='card-title'></h2>
            <ul className='card-list'>
                <li className='card-item'></li>
                <li className='card-item'></li>
                <li className='card-item'></li>
                <li className='card-item'></li>
                <li className='card-item'></li>
            </ul>
        </div>
        )
    }
}