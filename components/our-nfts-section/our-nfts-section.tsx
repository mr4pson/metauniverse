import { DECREMENTAL_VALUE, INCREMENTAL_VALUE } from 'common/constants';
import { SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { useState } from 'react';
import { Button } from 'ui-kit';
import { nfts } from './constants';
import OurNftsSectionItem from './our-nfts-section-item';
import styles from './our-nfts-section.module.scss';
import { TypeChosenNft } from './types';

const OurNftsSection = (): JSX.Element => {
  const [chosenNft, setChosenNft] = useState<TypeChosenNft>({
    index: nfts[0].index,
    link: nfts[0].link,
  });

  const handleChooseNftIndex = (updatingValue: number): void => {
    if (chosenNft.index > 1 && updatingValue === DECREMENTAL_VALUE) {
      const nextLeftNft = nfts.find(nft => nft.index === chosenNft.index - 1);

      nextLeftNft && setChosenNft({
        index: chosenNft.index - 1,
        link: nextLeftNft.link,
      });
    } else if (chosenNft.index <= nfts.length - 1 && updatingValue === INCREMENTAL_VALUE) {
      const nextRightNft = nfts.find(nft => nft.index === chosenNft.index + 1);

      nextRightNft && setChosenNft({
        index: chosenNft.index + 1,
        link: nextRightNft.link,
      });
    }
  }

  const openInNewTab = (): void => {
    window.open(chosenNft.link)
  }

  return (
    <div className={styles["our-nfts-section"]}>
      <div className="container">
        <SectionTitle
          normalText="Our"
          wrappedText="NFTs"
          titleInfo="Realized on the basis of the Binance Smart Chain (BSC)"
          withControls
          handleChooseNftIndex={handleChooseNftIndex}
        />
        <div className={styles["our-nfts-section__body"]}>
          {
            nfts.map(nft => (
              <OurNftsSectionItem
                key={nft.index}
                {...nft}
                chosenNftIndex={chosenNft.index}
                setChosenNft={setChosenNft}
              />
            ))
          }
        </div>
        <div className={styles['our-nfts-section__footer']}>
          <Button
            icon={
              <RightArrowIcon />
            }
            onClick={openInNewTab}
          >
            Go to the marketplace
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurNftsSection;
