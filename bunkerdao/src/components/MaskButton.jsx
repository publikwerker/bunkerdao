import React, { useState } from "react";

export default function MaskButton() {
    const [walletAddress, setWalletAddress] = useState();

      const connectWallet = async () => {
        // Check if MetaMask is installed on user's browser
        if(window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          const chainId = await window.ethereum.request({ method: 'eth_chainId'});
          // Check if user is connected to Mainnet
          if(chainId != '0x1') {
            alert("Please connect to Mainnet");
          } else {
            let wallet = accounts[0];
            setWalletAddress(wallet);
          }
        } else {
          alert("Please install Mask");
        }
      }

      return (
        <button className="btn btn-light text-dark" onClick={connectWallet}>Connect Wallet</button>
      );
}