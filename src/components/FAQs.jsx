import React from "react";
import './FAQs.css';

export default class FAQs extends React.Component {

    render() {

        return (
            <section className="faqs">
                <h2 className="faqs-title">FAQs</h2>
                <div className="faqs-body">

                    <h3 className="roadmap-subtitle">What’s an NFT?</h3>
                    <p>
                    An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one-of-a-kind digital item that users can buy, own, and trade. Some NFTs main functions are to be digital art and look cool, some offer additional utility. Think of ours like a rare piece of art that can also act as a “members” card which gets you access to members-only perks.
                    </p>

                    <h3 className="roadmap-subtitle">Will there be an “early access” presale?</h3>
                    <p>Yes, there will be a limited number of presale spots. Join the Discord to learn more.
                    </p>

                    <h3 className="roadmap-subtitle">How do I obtain a Membership Card (VacationDAO NFT)?</h3>
                    <p>The NFT will initially entitle the holder to online membership benefits, including:
                    </p>
                    <ul>
                        <li>The VacationDAO Membership Cards will be available for purchase on this site on 02/01/2022 to individuals eligible for the Community Sale. At that time, 3,636 Leisure Membership Cards and 919 Global Membership Cards will be available</li>
                        <li>Leisure Membership Cards will cost 0.18 ETH and Global Membership cards will cost 0.72 ETH</li>
                        <li>The remaining VacationDAO Membership Cards will be available for purchase on this site on 02/02/2022 to the public</li>
                    </ul>

                    <h3 className="roadmap-subtitle">Are there Membership Card purchase limits?</h3>
                    <p>Each wallet will be limited to 2 Silver Card Memberships and 1 Black Card Membership.
                    </p>
                   
                    <h3 className="roadmap-subtitle">Will VacationDAO retain any of the Membership Cards?</h3>
                    <p>Yes. VacationDAO will retain 10% of the supply of each Membership Card type for marketing, partnerships, growth, and strategic purposes, with all benefits accruing to the DAO and Community members.
                    </p>
                   
                    <h3 className="roadmap-subtitle">What will be the use of the Membership Card sale proceeds?</h3>
                    <p>The proceeds, net of taxes, will be used to fund DAO operations, including, but not limited to...
                    </p>
                    <ul>
                        <li>Chief DAO Officer and operational leadership, including course scouting, financial and acquisition planning</li>
                        <li>Product & engineering</li>
                        <li>DAO infrastructure setup and fees</li>
                        <li>Legal, compliance and accounting</li>
                        <li>Marketing, partnerships and sales</li>
                        <li>Community development</li>
                        <li>Further initiatives as approved by the DAO</li>
                    </ul>
                    <p>
                    Funds will be converted from ETH into USDC shortly after the sale to avoid volatility and preserve predictable purchasing power.
                    </p>
                   
                    <h3 className="roadmap-subtitle">What governance rights will VacationDAO Membership Cardholders have?</h3>
                    <p>The proposal, approval, and execution of non-financial VacationDAO matters, including, but not limited to…
                    </p>
                    <ul>
                        <li>Approval of VacationDAO functional operating committees</li>
                        <li>Property selection process and approval, as proposed by the relevant operating committee</li>
                        <li>Design, and overall vision of VacationDAO</li>
                        <li>Marketing, partnerships and sales</li>
                    </ul>
                   
                    <h3 className="roadmap-subtitle">What if the VacationDAO memberships are sold out?</h3>
                    <p>You may purchase Membership Cards on Rarible or OpenSea!
                    </p>
                </div>
            </section>
        )
    }
}