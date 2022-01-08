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
                <h2 className="join-title">Join Us</h2>
                <p className="p-join">Our Discord community is filled with travelers and leisure enthusiasts of all backgrounds - from tour professionals to weekend warriors! The Discord will be your portal to DAO activity. And you can share "local" gems, stories, and more with other community members.</p>
                <Button color={"blue"} text={"Join Our Discord"} onClick={joinOnClick} />
            </section>
        )
    }
}