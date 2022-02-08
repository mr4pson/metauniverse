export const getSteps = (screenWidth: number | null) => [
  {
    id: '01',
    number: '01',
    text: screenWidth && screenWidth > 990
      ? 'You need to install Metamask add-on on your Internet browser'
      : 'You need to download Metamask app from your App Store or Google Play',
  },
  {
    id: '02',
    number: '02',
    text: 'You need to connect your Metamask to Polygon Mainnet',
    greenNumber: true,
  },
  {
    id: '03',
    number: '03',
    text: 'You need to top up the MATIC balance on your Metamask. For example you can do this with your cryptocurrency exchange',
  },
  {
    id: '04',
    number: '04',
    text: 'You need to connect to PreSale on the PinkSale platform with your Metamask. Choose the amount of MATIC you want to invest.',
    greenNumber: true,
  },
  {
    id: '05',
    number: '05',
    text: 'Congratulations! You have become one of the first investors in Dendy metaverse, enjoy the profits!',
  },
];
