import React from "react";
import './Roadmap.css';

export default class Roadmap extends React.Component {

    render() {
        return(
            <section className="roadmap">
                <h2 className="roadmap-title">Roadmap</h2>
                <h3 className="roadmap-subtitle">02/01/2022</h3>
                <p>
                We will drop the VacationDAO Membership NFTs. These NFTs will allow for community access, governance, a wide variety of perks, and games in the near term. 
                </p>

                <h3 className="roadmap-subtitle">03/01/2022</h3>
                <p>In early 2022, the VacationDAO community will organize into a DAO tasked with identifying the first properties to acquire from a list provided by experts in Rental Arbitrage Acquisitions.
                </p>

                <h3 className="roadmap-subtitle">Q2 - 2022</h3>
                <p>The VacationDAO community will support the acquisition of 25-50+ properties/month VacationDAO Website goes live for members to start using their Membership Cards Suggestions for properties to acquire? Join discord and let us know.
                </p>

                <h3 className="roadmap-subtitle">Q3 - 2022 and Beyond</h3>
                <p>The VacationDAO community will continue to expand its locations and begin to create a global Vacation Rental membership that is owned and operated by the people. 
                </p>
            </section>
        )
    }
}