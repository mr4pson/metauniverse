import styles from '../our-nfts-section.module.scss';
import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { TypeChosenNft } from 'components/our-nfts-section/types';

type Props = {
  index: number;
  imgUrl: string;
  info: string;
  title: string;
  link: string;
  chosenNftIndex: number;
  setChosenNft: Dispatch<SetStateAction<TypeChosenNft>>;
}

const OurNftsSectionItem = ({
  index,
  imgUrl,
  info,
  title,
  link,
  chosenNftIndex,
  setChosenNft,
}: Props): JSX.Element => {
  return (
    <div className={classNames(styles['our-nfts-item'], {
        [styles['our-nfts-item_active']]: index === chosenNftIndex,
      })}
      onClick={() => setChosenNft({
        index: index,
        link: link,
      })}
    >
      <div className={styles['our-nfts-item__image-wrapper']}>
        <div
          className={styles['our-nfts-item__image']}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      </div>
      <span className={styles['our-nfts-item__info']}>
        {info}
      </span>
      <h3 className={styles['our-nfts-item__title']}>{title}</h3>
    </div>
  );
};

export default OurNftsSectionItem;
