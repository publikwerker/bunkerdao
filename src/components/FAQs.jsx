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

                    <h3 className="roadmap-subtitle">How do I obtain a Membership Card (LinksDAO NFT)?</h3>
                    <p>The NFT will initially entitle the holder to online membership benefits, including:
                    </p>
                    <ul>
                        <li>The LinksDAO Membership Cards will be available for purchase on this site on New Year’s Day 2022 at 18:18 UTC to individuals eligible for the Community Sale. At that time, 3,636 Leisure Membership Cards and 919 Global Membership Cards will be available</li>
                        <li>Leisure Membership Cards will cost 0.18 ETH and Global Membership cards will cost 0.72 ETH</li>
                        <li>The remaining LinksDAO Membership Cards will be available for purchase on this site on January 2nd 2022 at 18:18 UTC to the public</li>
                    </ul>

                    <h3 className="roadmap-subtitle">Are there Membership Card purchase limits?</h3>
                    <p>Each wallet will be limited to 3 Leisure Memberships and 1 Global Membership.
                    </p>
                   
                    <h3 className="roadmap-subtitle">Will LinksDAO retain any of the Membership Cards?</h3>
                    <p>Yes. LinksDAO will retain 10% of the supply of each Membership Card type for marketing, partnerships, growth, and strategic purposes, with all benefits accruing to the DAO and Community members.
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
                    Funds will be converted from ETH into stablecoin shortly after the sale to avoid volatility and preserve predictable purchasing power.
                    </p>
                   
                    <h3 className="roadmap-subtitle">Will LinksDAO retain any of the Membership Cards?</h3>
                    <p>The proposal, approval, and execution of non-financial LinksDAO matters, including, but not limited to…
                    </p>
                    <ul>
                        <li>Approval of LinksDAO functional operating committees</li>
                        <li>Physical club selection process and approval, as proposed by the relevant operating committee</li>
                        <li>Club rules, including culture, activities, design, and overall vision</li>
                        <li>Club membership rules and admissions policies</li>
                        <li>Marketing, partnerships and sales</li>
                    </ul>
                   
                    <h3 className="roadmap-subtitle">What are the terms of sale?</h3>
                    <p>View the full Terms of Sale.
                    </p>
                   
                    <h3 className="roadmap-subtitle">What if the LinksDAO memberships are sold out??</h3>
                    <p>You may purchase Membership Cards on Rarible or OpenSea!
                    </p>
    
                </div>
            </section>
        )
    }
}