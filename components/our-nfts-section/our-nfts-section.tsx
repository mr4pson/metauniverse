import { DECREMENTAL_VALUE, INCREMENTAL_VALUE } from 'common/constants';
import { SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { useState } from 'react';
import { Button } from 'ui-kit';
import { nfts } from './constants';
import OurNftsSectionItem from './our-nfts-section-item';
import styles from './our-nfts-section.module.scss';
import { TypeChosenNft } from './types';
import { useModal } from 'modules/modal/use-modal';
import { Modal } from 'modules/modal/modal';
import { Fade } from 'react-awesome-reveal';

const OurNftsSection = (): JSX.Element => {
  //TODO: uncomment after 17 Jan 2022
  // const router = useRouter();
  
  const [chosenNft, setChosenNft] = useState<TypeChosenNft>({
    index: nfts[0].index,
    link: nfts[0].link,
  });

  const { modalIsOpen, handleClose, handleOpen } = useModal();

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

  //TODO: uncomment after 17 Jan 2022
  // const openInNewTab = (): void => {
  //   router.push(chosenNft.link);
  // }

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
        <Fade duration={3500}>
          <div className={styles["our-nfts-section__body"]}>
            <Fade cascade triggerOnce direction={'right'} duration={750}>
              {nfts.map(nft => (
                <OurNftsSectionItem
                  key={nft.index}
                  {...nft}
                  chosenNftIndex={chosenNft.index}
                  setChosenNft={setChosenNft}
                />
              ))}
            </Fade>
          </div>
          <div className={styles['our-nfts-section__footer']}>
            <Button
              icon={
                <RightArrowIcon />
              }
              onClick={handleOpen}
            >
              Go to the marketplace
            </Button>
          </div>
        </Fade>
      </div>
      <Modal
        title="NFTs availability"
        text="Will be available on"
        date={<span>JANUARY 17 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default OurNftsSection;
