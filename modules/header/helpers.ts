import { Dispatch, SetStateAction } from 'react';
import { Page, paths } from 'routes/constants';
import { TypeHeaderLink } from './types';

export const getHeaderLinks = (
  setModalContent: Dispatch<SetStateAction<{
    text: string;
    date: string;
}>>
): TypeHeaderLink[] => [
  {
    id: paths[Page.PLAY_NOW],
    title: 'PLAY NOW',
    // link: paths[Page.PLAY_NOW],
    isDividerExist: true,
    onClick: () => setModalContent({
      text: 'Will be available on',
      date: 'April, 2022',
    }),
  },
  {
    id: 'buy-nft',
    title: 'BUY NFT',
    // link: 'buy-nft',
    isDividerExist: true,
    onClick: () => setModalContent({
      text: 'Will be available on',
      date: 'March, 2022',
    }),
  },
  {
    id: 'dendy-swap',
    title: 'DENDY SWAP',
    // link: 'dendy-swap',
    isDividerExist: true,
    onClick: () => setModalContent({
      text: 'Will be available',
      date: 'March, 2022',
    }),
  },
  {
    id: 'launchpad',
    title: 'LAUNCHPAD',
    // link: 'launchpad',
    isDividerExist: true,
    onClick: () => setModalContent({
      text: 'Will be available',
      date: 'September, 2022',
    }),
  },
  {
    id: 'join-community',
    title: 'JOIN COMMUNITY',
    link: 'https://t.me/dendymeta',
    isDividerExist: false,
    onClick: () => false,
  }
];
