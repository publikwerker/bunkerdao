import React from "react";
import MaskButton from './MaskButton';

export default class Header extends React.Component {

    render(){
        return (
            <header className="App-header">
            <nav>
              <a href="/">
                <span className='logo'>BunkerDao</span>
              </a>
              <MaskButton />
            </nav>
            <h1>A New Era in Time-Share</h1>
          </header>
        );
    }
}