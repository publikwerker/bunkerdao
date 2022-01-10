import React from 'react';
import Card from './Card';
import './Main.css';
const silver = require('./images/vDAOSilver.png');
const props1 = {
    title: "Silver Card Membership NFT",
    total: "6,363 total",
    text: "Enjoy the perks of DAObnb including...",
    list: [
        "3 days of free stay in one of our vacation rentals",
        "Governance rights via $bnb token, launching in early 2022",
        "Access and discounts on packages, leisure products, merch, and more",
        "Access to members-only Discord channels, including guest appearances by business, and celebrity luminaries",
        "More to come!"
    ],
    price: "0.18 ETH"
}
const props2 = {
    title: "Black Card Membership NFT",
    total: "2,727 total",
    text: "All the perks of a Silver Card Membership plus...",
    list: [
        "4x the governance rights via $bnb token, launching in early 2022",
        "4 additional days of stay at one of our vacation rentals",
        "% of profit-sharing based on ownership",
        "Access to rental reciprocity with other Partners who opt-in to participating",
        "More to come!"
    ],
    price: "0.72 ETH"
}
const black = require('./images/vDAOBlack.png');


export default class Main extends React.Component {

    render() {


        return (
            <main>
                <div className='card-container'>
                    <Card src={silver} data={props1} />
                    <Card src={black} data={props2}/>        
                </div>
            </main>
        )
    }
}