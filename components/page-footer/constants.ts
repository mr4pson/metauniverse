import { Dispatch, SetStateAction } from "react";

export const links = [
  {
    id: 'contract',
    title: 'Contract',
    link: 'https://bscscan.com/address/0x68745256cC11c8EE92cF918a8Cc6BbD2618Cadde#code',
  },
  {
    id: 'buyToken',
    title: 'Buy token',
    link: 'https://pancakeswap.finance/swap?outputCurrency=0x68745256cc11c8ee92cf918a8cc6bbd2618cadde',
  },
  {
    id: 'liveChart',
    title: 'Live chart',
    link: 'https://poocoin.app/tokens/0x68745256cc11c8ee92cf918a8cc6bbd2618cadde',
  },
  {
    id: 'whitePaper',
    title: 'White Paper',
    link: 'https://dendy-metaverse.gitbook.io/dendymetaverse',
  },
  {
    id: 'github',
    title: 'Github',
    link: 'https://github.com/dendymetaverse',
  },
];

export const getProducts = (
  setModalContent: Dispatch<SetStateAction<{
    text: string;
    date: string;
  }>>
) => [
  {
    id: 'playGames',
    title: 'Play games',
    onClick: () => setModalContent({
      text: 'Will be available on',
      date: 'April, 2022',
    }),
  },
  {
    id: 'nftMarketplace',
    title: 'NFT-Marketplace',
    onClick: () => setModalContent({
      text: 'Will be available on',
      date: 'March, 2022',
    }),
  },
  {
    id: 'dendySwap',
    title: 'Dendy Swap',
    onClick: () => setModalContent({
      text: 'Will be available',
      date: 'March, 2022',
    }),
  },
  {
    id: 'dendyLaunchpad',
    title: 'Dendy Launchpad',
    onClick: () => setModalContent({
      text: 'Will be available',
      date: 'September, 2022',
    }),
  },
];

export const mediaIcons = [
  {
    id: 'telegram',
    img: 'assets/page-footer-images/Telegram.png',
    link: 'https://t.me/dendymeta',
  },
  {
    id: 'twitter',
    img: 'assets/page-footer-images/Twitter.png',
    link: 'https://twitter.com/dendymetaverse',
  },
  {
    id: 'github',
    img: 'assets/page-footer-images/Github.png',
    link: 'https://www.reddit.com/user/dendymetaverse',
  },
  {
    id: 'youTube',
    img: 'assets/page-footer-images/YouTube.png',
    withSmallHeight: true,
    link: 'https://youtube.com/channel/UCMCIR2plG8w-LOQ_OW5Ej6Q',
  },
  {
    id: 'gitBook',
    img: 'assets/page-footer-images/GitBook.png',
    link: 'https://dendy-metaverse.gitbook.io/dendymetaverse',
  },
  {
    id: 'medium',
    img: 'assets/page-footer-images/Medium.png',
    link: 'https://medium.com/@dendymetaverse',
  },
];
