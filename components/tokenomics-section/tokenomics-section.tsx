import { getImageUrl } from 'helpers';
import { SectionTitle } from 'modules';
import Image from 'next/image';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
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
            <span>Trade unique in-game NFTs to increase<br /> your profit</span>
          }
        />
        <div className={styles['tokenomics-section__body']}>
          <div className={styles["game-features"]}>
            <div className={styles["game-features__left"]}>
              <div className={styles["burnt-info"]}>
                <Image
                  className={styles["burnt-info__icon"]}
                  src="/assets/images/tv_burnt.png"
                  alt="me"
                  width="125px"
                  height="148px"
                />
                <div className={styles["burnt-info__title"]}>Burnt <br /> 0</div>
              </div>
            </div>
            <div className={styles["game-features__right"]}>
              {gameFeatures.map(gameFeature => (
                <div className={styles["game-feature"]}>
                  <div className={styles["game-feature__icon"]}>
                    <Image
                      className={styles["burnt-info__icon"]}
                      src={getImageUrl(gameFeature.icon)}
                      alt="me"
                      width="67"
                      height="80"
                    />
                  </div>
                  <div className={styles["game-feature__title"]}>{gameFeature.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['tokenomics-section__footer']}>
          <Button
            icon={
              <RightArrowIcon />
            }
          >
            Connect wallet
          </Button>
          <div className={styles["total-taxes"]}>
            <Image
              className={styles["total-taxes__icon"]}
              src={getImageUrl("im.png")}
              alt="me"
              width="53"
              height="53"
            />
            <div className={styles["total-taxes__label"]}>
              Total tax: 10% <br /> Certik audited
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TokenomicsSection);
