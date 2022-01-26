import { DECREMENTAL_VALUE, INCREMENTAL_VALUE } from 'common/constants';
import { SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { useState } from 'react';
import { Button, CarouselWithDots } from 'ui-kit';
import { nfts } from './constants';
import OurNftsSectionItem from './our-nfts-section-item';
import styles from './our-nfts-section.module.scss';
import { TypeChosenNft } from './types';
import { useModal } from 'modules/modal/use-modal';
import Modal from 'modules/modal/modal';
import { Fade } from 'react-awesome-reveal';
import { useWindowSize } from 'hooks';
import ScrollContainer from 'react-indiana-drag-scroll'

const OurNftsSection = (): JSX.Element => {
  //TODO: uncomment after 17 Jan 2022
  // const router = useRouter();
  
  const size = useWindowSize();

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
          titleInfo="Trade unique in-game NFTs to increase your profit"
          withControls
          handleChooseNftIndex={handleChooseNftIndex}
        />
        <Fade duration={3500}>
          <ScrollContainer className="scroll-container">
            <div className={styles["our-nfts-section__body"]}>
              {
                size.width && size.width < 991 ? (
                  <CarouselWithDots className={styles['our-nfts-section__carousel']} items={nfts.map(nft => (
                    <OurNftsSectionItem
                      key={nft.index}
                      {...nft}
                      chosenNftIndex={chosenNft.index}
                      setChosenNft={setChosenNft}
                    />
                  ))} />
                ) : (
                  <Fade triggerOnce direction={'right'} duration={750}>
                    {nfts.map(nft => (
                      <OurNftsSectionItem
                        key={nft.index}
                        {...nft}
                        chosenNftIndex={chosenNft.index}
                        setChosenNft={setChosenNft}
                      />
                    ))}
                  </Fade>
                )
              }
            </div>
          </ScrollContainer>
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
        title="Page availability"
        text="Will be available on"
        date={<span>March, 2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default OurNftsSection;

export async function getServerSideProps(context): Promise<{ props: {} }> {
  return {
    props: {}, // will be passed to the page component as props
  }
}
