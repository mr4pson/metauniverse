import { getImageUrl } from 'helpers';
import { SectionTitle } from 'modules';
import Image from 'next/image';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Fade } from "react-awesome-reveal";
import { Button } from 'ui-kit';
import { gameFeatures } from './constants';
import styles from './tokenomics-section.module.scss';

const TokenomicsSection = (): JSX.Element => {
  return (
    <div className={styles["tokenomics-section"]}>
      <div className={"container"}>
        <SectionTitle
          normalText="Our"
          wrappedText="Tokenomics"
          titleInfo={
            <span>Realized on the basis of Polygon and BSC</span>
          }
        />
        <Fade duration={3500}>
          <div className={styles['tokenomics-section__body']}>
            <div className={styles["game-features"]}>
              <Fade direction="up" cascade triggerOnce duration={1000}>
                <div className={styles["game-features__left"]}>
                  <div className={styles["burnt-info"]}>
                    <Image
                      className={styles["burnt-info__icon"]}
                      src="/assets/images/tv_burnt.png"
                      alt="me"
                      width="125px"
                      height="148px"
                    />
                    <div className={styles["burnt-info__title"]}>
                      <div className={styles["burnt-info__label"]}>Total supply:</div>
                      <div className={styles["burnt-info__val"]}>100 000 000</div>
                    </div>
                  </div>
                </div>
              </Fade>
              <div className={styles["game-features__right"]}>
                <Fade delay={500} direction="up" cascade triggerOnce duration={1000}>
                  {gameFeatures.map((gameFeature, index) => (
                    <div key={`game-feature-${index}`} className={styles["game-feature"]}>
                      <div className={styles["game-feature__icon"]}>
                        <div
                          style={{ backgroundImage: `url(${getImageUrl(gameFeature.icon)})` }}
                          className={styles["game-feature__icon"]}
                        ></div>
                      </div>
                      <div className={styles["game-feature__title"]}>{gameFeature.title}</div>
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
          <div className={styles['tokenomics-section__footer']}>
            <Fade duration={1500}>
              <Fade duration={1250} triggerOnce direction="right">
                <div className={styles["pink-sale"]}>
                  <span>Pinksale KYC'ed Coinscope audited</span>
                </div>
              </Fade>
            </Fade>
          </div>
          <Fade duration={1500}>
            <Fade duration={1250} triggerOnce direction="left">
              <a
                className={styles["tokenomics-section__link"]}
                href="https://bscscan.com/address/0x68745256cC11c8EE92cF918a8Cc6BbD2618Cadde#code"
                target="_blank"
              >
                <Button
                  icon={
                    <RightArrowIcon />
                  }
                >
                  View the contract
                </Button>
              </a>
            </Fade>
          </Fade>
        </Fade>
      </div>
      {/* <Modal
        title="Tokenomics availability"
        text="Will be available on"
        date={<span>JANUARY 1 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      /> */}
    </div>
  );
};

export default memo(TokenomicsSection);
