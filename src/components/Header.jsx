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
                  <span className='logo'>BunkerDAO</span>
                </a>
                <Button color={"green"} text={"Connect Wallet"} callback={maskOnClick}/>
              </nav>
            </div>
            <div className="header-row intro">
              <div className="header-col">
                <h1 className="intro-header">A New Era in Time-Share</h1>
              </div>
              <div className="header-col">
                <img className="header-image" src="https://via.placeholder.com/300.png/09f/fff?text=Snappy+Header+Image" alt="A fancy NFT hovering over a bunker"></img>
              </div>
            </div>
            <div className="header-row">
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
            </div>
            <div className="header-row left button-sea">
              <Button color={"blue"} text={"Buy on Open Sea"} callback={seaOnClick} />
            </div>
        </header>
      );
    }
}