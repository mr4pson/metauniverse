import { SectionTitle } from 'modules';
import Modal from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';
import { RightArrowIcon } from 'public/icons';
import { Fade, Zoom } from "react-awesome-reveal";
import { Button } from 'ui-kit';
import { features } from './constants';
import FeatureSectionItem from './feature-section-item';
import styles from './feature-section.module.scss';

const FeatureSection = (): JSX.Element => {
  const { modalIsOpen, handleClose, handleOpen } = useModal();

  return (
    <div className={styles["feature-section"]}>
      <div className={"container"}>
        <SectionTitle
          normalText="Our"
          wrappedText="Features"
          titleInfo="Decentralized open-source metaverse based on the blockchain Binance Smart Chain"
        />
          <Fade duration={3500}>
            <div className={styles['feature-section__body']}>
              <Zoom cascade triggerOnce duration={750}>
                {features.map((feature) => (
                  <FeatureSectionItem
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    text={feature.text}
                  />
                ))}
              </Zoom>
            </div>
            <div className={styles['feature-section__footer']}>
              <Button
                icon={
                  <RightArrowIcon />
                }
                onClick={handleOpen}
              >
                Buy now
              </Button>
            </div>
          </Fade>
      </div>
      <Modal
        title="Feature availability"
        text="Will be available on"
        date={<span>JANUARY 1 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default FeatureSection;
