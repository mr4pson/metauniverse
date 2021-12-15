import { Header, PageTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Button } from 'ui-kit';
import styles from './feature-section.module.scss';

const FeatureSection = (): JSX.Element => {
  return (
    <div className={styles["feature-section"]}>
      <div className={"container"}>
        <div className={styles["feature-section__page-title"]}>
          <PageTitle className={styles["feature-section__page-title_top"]} normalText="Our" wrappedText="Features" />
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
