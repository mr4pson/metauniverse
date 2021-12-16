import { SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { Button } from 'ui-kit';
import { features } from './constants';
import FeatureSectionItem from './feature-section-item';
import styles from './feature-section.module.scss';

const FeatureSection = (): JSX.Element => {
  return (
    <div className={styles["feature-section"]}>
      <div className={"container"}>
        <SectionTitle
          normalText="Our"
          wrappedText="Features"
          titleInfo="Decentralized open-source metaverse based on the blockchain Binance Smart Chain"
        />
        <div className={styles['feature-section__body']}>
          {
            features.map((feature) => (
              <FeatureSectionItem
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            ))
          }
        </div>
        <div className={styles['feature-section__footer']}>
          <Button
            icon={
              <RightArrowIcon />
            }
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
