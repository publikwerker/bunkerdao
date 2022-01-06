import React from "react";
import './Button.css';

export default class Button extends React.Component {

    render() {
        console.log(this.props);
        return (
            <button className={this.props.color} onClick={this.props.callback}>{this.props.text}</button>
        )
    }
}