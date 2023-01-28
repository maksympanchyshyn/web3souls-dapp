import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const useBrowserWallet = () => {
  const [account, setAccount] = useState<string>();

  useEffect(() => {
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_accounts', []);

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    };

    checkConnection();
    window.ethereum?.on('accountsChanged', checkConnection);
    return () => window.ethereum.removeListener('accountsChanged', checkConnection);
  }, []);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    setAccount(accounts[0]);
  };

  return { account, connect };
};

export default useBrowserWallet;
