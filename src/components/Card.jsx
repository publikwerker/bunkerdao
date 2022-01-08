import React from "react";
import './Card.css';

export default class Card extends React.Component {

    render() {
        console.log(this.props);
        console.log(this.props.data);

        const lister = [];
        this.props.data.list.map(element => {
            lister.push(<li>{element}</li>);
        });
        console.log("lister", lister);
        return (
            <div className='card'>
            <a ><img className="card-img" src={this.props.src}></img></a>
            <h2 className='card-title'>{this.props.data.title}</h2>
            <p>{this.props.data.total}</p>
            <p>{this.props.data.text}</p>
            <ul className='card-list'>
                {lister}
            </ul>
            <h3>{this.props.data.price}</h3>
        </div>
        )
    }
}