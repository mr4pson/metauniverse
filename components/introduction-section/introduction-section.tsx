import { Header, PageTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Button } from 'ui-kit';
import styles from './introduction-section.module.scss';

const IntroductionSection = (): JSX.Element => {
  return (
    <div className={styles["introduction-section"]}>
      <div className={"container"}>
        <div className={styles["page-title"]}>
          <PageTitle className={styles["page-title__top"]} normalText={"What's a"} wrappedText={"Dendy"} />
          <div className={styles["page-title__bottom"]}>Metaverse?</div>
        </div>
        <div className={styles['page-description']}>
          The Dendy Metaverse is an innovative DeFi game platform based on the Play to Earn concept. 
          With us you can play the most popular seven 
          Dendy games straight from your childhood.
          <br />We also have Dendy Swap and Dandy Launchpad!
          It's never been easier to earn!
        </div>
        <div className={styles['footer']}>
          <Button
            icon={
              <RightArrowIcon />
            }
          >
            White Paper
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(IntroductionSection);
