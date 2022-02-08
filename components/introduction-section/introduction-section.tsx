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
            Dendy Metaverse is a decentralized open-source platform containing 7 of the most popular games
            of the 80s and 90s. We rebuilt games in the P2E concept. Just imagine, you will play Super Mario
            from your childhood and make a profit for it! We are introducing in-game NFTs to improve the profitability
            of the game and gain additional experience. To make using Dendy Metaverse even easier, we are introducing
            Dendy SWAP so that you can exchange tokens directly on the platform. We are a community driven project!
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
