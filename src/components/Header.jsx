import React from "react";
import Button from './Button';
import './Header.css';


export default class Header extends React.Component {

    render(){
      const maskOnClick = () => {
        console.log("Mask onClick fired");
      }
      
      const seaOnClick = () => {
        console.log("Sea onClick fired");
      }

      return (
          <header className="header">
            <div className="header-row">
              <nav>
                <a href="/">
                  <span className='logo'>DAObnb</span>
                </a>
                <Button color={"green"} text={"Connect Wallet"} callback={maskOnClick}/>
              </nav>
            </div>
            <div className="header-row intro">
              <div className="header-col">
                <h1 className="intro-header">Member Owned Vacation Rentals</h1>
              </div>
              <div className="header-col">
                <img className="header-image" src="https://via.placeholder.com/300.png/09f/fff?text=Snappy+Header+Image" alt="A fancy NFT hovering over a landscape"></img>
              </div>
            </div>
            <div className="header-row">
              <p><strong>DAObnb</strong> is reimagining community-managed short-term rental properties. Thousands of members have come together to crowdfund vacation rentals. There are two types of memberships for sale. The Silver Card and the Black Card, both with their own unique perks. 
              </p>
            </div>
            <div className="header-row left button-sea">
              <Button color={"blue"} text={"Buy on Open Sea"} callback={seaOnClick} />
            </div>
        </header>
      );
    }
}