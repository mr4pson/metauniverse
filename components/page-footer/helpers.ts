import { Dispatch, SetStateAction } from "react";
import { Page, paths } from "routes/constants";

export const getProductLinks = (
    setModalContent: Dispatch<SetStateAction<{
      text: string;
      date: string;
  }>>
  ): any[] => [
    {
      id: paths[Page.PLAY_NOW],
      title: 'Play games',
      // link: paths[Page.PLAY_NOW],
      isDividerExist: true,
      onClick: () => setModalContent({
        text: 'Will be available on',
        date: 'February 20, 2022',
      }),
    },
    {
      id: 'nft-marketplace',
      title: 'NFT-Marketplace',
      // link: 'buy-nft',
      isDividerExist: true,
      onClick: () => setModalContent({
        text: 'Will be available on',
        date: 'January 17, 2022',
      }),
    },
    {
      id: 'dendy-swap',
      title: 'Dendy Swap',
      // link: 'dendy-swap',
      isDividerExist: true,
      onClick: () => setModalContent({
        text: 'Will be available',
        date: 'soon',
      }),
    },
    {
      id: 'dendy-launchpad',
      title: 'Dendy Launchpad',
      // link: 'launchpad',
      isDividerExist: true,
      onClick: () => setModalContent({
        text: 'Will be available',
        date: 'soon',
      }),
    },
  ];
