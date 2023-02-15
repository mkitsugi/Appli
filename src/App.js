import React, { useState } from 'react';
import './App.css';
import Web3 from 'web3';

function NFTMint() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Connected to wallet");
  
      // Instantiate web3 with Metamask provider
      const web3 = new Web3(window.ethereum);
  
      // Get current network ID
      const networkId = await web3.eth.net.getId();
  
      if (networkId !== 1) {
        alert('Please connect to the main Ethereum network.');
        return;
      }
  
      // Check if accounts array is non-empty
      if (accounts.length === 0) {
        alert('Please connect to your Metamask account.');
        return;
      }
  
      setAccount(accounts[0]);
      setConnected(true);
    } catch (error) {
      if (error.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="nft-mint">
      <h1 className="title">NFT Mint</h1>
      {!connected && (
        <div className="approval-message">
          <p>Connect your wallet to continue.</p>
          <button className="wallet-connect" onClick={connectWallet}>Connect Wallet</button>
        </div>
      )}
      {connected && (
        <div className="connected-message">
          <p>Wallet connected.</p>
        </div>
      )}
      <div className="buttons">
        <button className="nft-mint">NFT Mint</button>
      </div>
    </div>
  );
}

export default NFTMint;
