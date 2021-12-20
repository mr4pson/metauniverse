import { Header, PageTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Button } from 'ui-kit';
import styles from './introduction-section.module.scss';
import { Fade } from "react-awesome-reveal";

const IntroductionSection = (): JSX.Element => {
  return (
    <div className={styles["introduction-section"]}>
      <div className={"container"}>
        <div className={styles["introduction-section__page-title"]}>
          <PageTitle className={styles["introduction-section__page-title_top"]} normalText="What's a" wrappedText="Dendy" />
          <div className={styles["introduction-section__page-title_bottom"]}>Metaverse?</div>
        </div>
        <Fade duration={3500} triggerOnce>
          <div className={styles['introduction-section__page-description']}>
            The Dendy Metaverse is an innovative DeFi game platform based on the Play to Earn concept. 
            With us you can play the most popular seven 
            Dendy games straight from your childhood.
            <br />We also have Dendy Swap and Dandy Launchpad!
            It's never been easier to earn!
          </div>
        </Fade>
        <div className={styles['introduction-section__computer']}></div>
        <Fade duration={3500} triggerOnce>
          <div className={styles['introduction-section__footer']}>
            <a
              className={styles['introduction-section__link']}
              href='https://dendy-metaverse.gitbook.io/dendymetaverse'
              target="_blank"
            >
              <Button
                icon={
                  <RightArrowIcon />
                }
              >
                White Paper
              </Button>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default IntroductionSection;
