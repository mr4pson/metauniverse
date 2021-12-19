import { Page, paths } from 'routes/constants';

export const headerLinks = [
  {
    id: paths[Page.HOME],
    title: 'PLAY NOW',
    link: paths[Page.HOME],
    isDividerExist: true,
  },
  {
    id: 'buy-nft',
    title: 'BUY NFT',
    link: 'buy-nft',
    isDividerExist: true,
  },
  {
    id: 'dendy-swap',
    title: 'DENDY SWAP',
    link: 'dendy-swap',
    isDividerExist: true,
  },
  {
    id: 'launchpad',
    title: 'LAUNCHPAD',
    link: 'launchpad',
    isDividerExist: true,
  },
  {
    id: 'join-community',
    title: 'JOIN COMMUNITY',
    link: 'https://t.me/dendymetaverse',
    isDividerExist: false,
  }
];
