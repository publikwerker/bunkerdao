import React from "react";
import './Join.css';
import Button from "./Button";

export default class Join extends React.Component {

    render() {
        
      const joinOnClick = () => {
        console.log("Join onClick fired");
      }
        return (
            <section className="join">
                <h2 className="join-title">Join the Clubhouse</h2>
                <p>Our Discord community is filled with golfers and leisure enthusiasts of all skill levels - from tour professionals to weekend warriors to friends brand-new to golf! The Discord will be your portal to DAO activity. And you can share your gear, stories and arrange tee times, and more with other community members.</p>
                <Button color={"blue"} text={"Join Our Discord"} onClick={joinOnClick} />
            </section>
        )
    }
}