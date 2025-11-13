# Aztec Sequencer Node + WalletConnect v2 Integration

![Aztec + WalletConnect](https://i.imgur.com/0xABCDE.png)

**A fully functional Aztec Network Sequencer Node with WalletConnect v2 integration and on-chain XP rewards.**

This repository implements:
- Aztec Sequencer Node (local setup & monitoring)
- WalletConnect v2 authentication & session management
- On-chain XP reward system via `XPTracker.sol`
- React + Vite frontend with `@web3modal/standalone`

---

## Features

| Feature | Status | Description |
|-------|--------|-----------|
| **Sequencer Node** | ✅ | Runs Aztec sequencer locally with status endpoints |
| **WalletConnect v2** | ✅ | Full integration using `@walletconnect/sign-client` & `@web3modal/standalone` |
| **On-chain XP** | ✅ | `XPTracker.sol` awards XP on successful WalletConnect session |
| **Frontend UI** | ✅ | Connect wallet → View sequencer status → Earn XP |
| **Hardhat Deployment** | ✅ | One-click deploy of XP contract |

---

## Project Structure

aztec-sequencer-wc/
├── src/
│   ├── sequencer/
│   │   ├── node.ts              # Aztec Sequencer (core logic)
│   │   └── walletconnect.ts     # WalletConnect v2 integration
│   ├── contracts/
│   │   └── XPTracker.sol        # On-chain XP tracker
│   └── frontend/
│       ├── App.tsx              # React + Web3Modal UI
│       └── connectors.ts
├── scripts/
│   └── deploy-xp.ts             # Deploy XP contract
├── hardhat.config.ts
├── package.json
├── README.md
└── .env.example


---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/gumusbase/aztec-sequencer-wc.git
cd aztec-sequencer-wc
npm install

---
### 2. Setup Environment
cp .env.example .env

Edit .env:
WALLETCONNECT_PROJECT_ID=your_project_id_from_walletconnect_cloud
PRIVATE_KEY=your_deployer_private_key_for_testnet
 Get your free Project ID: cloud.walletconnect.com

 3. Deploy XP Contract
 npx hardhat run scripts/deploy-xp.ts --network aztec_testnet

 4. Run Sequencer + WalletConnect
 npm run node

 5. Start Frontend
 npm run dev

 Open http://localhost:5173 → Click Connect → Approve in wallet → Earn 100 XP on-chain!

 

