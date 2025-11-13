import { SignClient } from '@walletconnect/sign-client';
import { awardXP } from '../../scripts/interact';

let client: any;

export async function initWalletConnect() {
  client = await SignClient.init({
    projectId: process.env.WALLETCONNECT_PROJECT_ID!,
    metadata: {
      name: 'Aztec Sequencer WC',
      description: 'Connect to earn XP',
      url: 'http://localhost:5173',
      icons: ['https://avatars.githubusercontent.com/u/123456']
    }
  });

  client.on('session_proposal', async (proposal: any) => {
    const { id, params } = proposal;
    const { requiredNamespaces } = params;

    const namespaces: any = {};
    Object.keys(requiredNamespaces).forEach(key => {
      namespaces[key] = {
        chains: requiredNamespaces[key].chains,
        methods: requiredNamespaces[key].methods,
        events: requiredNamespaces[key].events,
        accounts: requiredNamespaces[key].chains.map((chain: string) => `${chain}:0xUserAddress`)
      };
    });

    const { acknowledgment } = await client.approve({ id, namespaces });
    await acknowledgment;

    const session = client.session.getAll()[0];
    const address = session.namespaces.eip155.accounts[0].split(':')[2];
    await awardXP(address, 100);
    console.log(`XP Awarded to ${address}`);
  });

  return client;
}
