import { useState } from 'react';
import { Web3Modal } from '@web3modal/standalone';

const web3Modal = new Web3Modal({
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  walletConnectVersion: 2
});

function App() {
  const [account, setAccount] = useState<string | null>(null);

  const connect = async () => {
    try {
      const session = await web3Modal.openModal();
      const address = session.namespaces.eip155.accounts[0].split(':')[2];
      setAccount(address);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Aztec Sequencer + WalletConnect</h1>
      <button onClick={connect} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        {account ? `Connected: ${account.slice(0, 6)}...` : 'Connect Wallet'}
      </button>
      {account && <p>100 XP Awarded on-chain!</p>}
    </div>
  );
}

export default App;
