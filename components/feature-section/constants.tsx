import { LockIcon, NftIcon, PeopleIcon, PlayIcon, PullIcon, WhaleIcon } from 'public/icons';

export const features = [
  {
    id: 'Play2Earn',
    title: "Play 2 Earn",
    text: "Earn income in the game arena or buy tokens yourself",
    icon: <PlayIcon />,
  },
  {
    id: 'TradeUnique',
    title: <span>Trade unique<br /> NFTs</span>,
    text: "That give you a better chance of winning",
    icon: <NftIcon />,
  },
  {
    id: 'Lock',
    title: "The liquidity pool is locked",
    text: "For three years, which guarantees the safety of your funds",
    icon: <LockIcon />,
  },
  {
    id: 'Whale',
    title: "Anti-Whale mechanism",
    text: "Maximum transaction volume 0.5% of the total number of tokens",
    icon: <WhaleIcon />,
  },
  {
    id: 'Pull',
    title: "Automatic liquidity pool generation",
    text: "5% of each transaction is allocated to the liquidity pool",
    icon: <PullIcon />,
  },
  {
    id: 'People',
    title: "Automatic passive income farming",
    text: "5% of each transaction is distributed to token holders",
    icon: <PeopleIcon />,
  },
]
