import { SectionTitle } from 'modules';
import styles from './build-in-section.module.scss';
import classNames from 'classnames';
import { Fade } from 'react-awesome-reveal';

const BuildInSection = (): JSX.Element => {
  return (
    <div className={styles["build-in-section"]}>
      <div className="container">
        <SectionTitle
          normalText="Our build-in"
          normalTextBottom="swap & launchpad"
          wrappedText="Dendy"
          titleInfo="Our next-generation intra-metaverse high-yield platforms"
          pageTitleClassName={styles['build-in-section__page-title']}
        />
        <div className={styles['build-in-section__body']}>
          <Fade duration={1500}>
            <Fade duration={1250} triggerOnce direction="left">
              <div className={styles['build-in-section__body-row']}>
                <div className={styles['build-in-section__next-generation-img-wrapper']}>
                  <div className={styles['build-in-section__next-generation-img']} />
                </div>
                <span className={styles['build-in-section__next-generation-text']}>
                  Next-generation in-metaverse swap protocol, allowing marketmakers 
                  to achieve a new profitable level 
                  by using our trading terminal
                </span>
              </div>
            </Fade>
          </Fade>
          <Fade duration={1500}>
            <Fade duration={1250} triggerOnce direction="right">
              <div className={
                classNames(styles['build-in-section__body-row'],
                  styles['build-in-section__build-in-row']
                )
              }>
                <span className={styles['build-in-section__build-in-text']}>
                  Built-in meta-lunchpad for earlier access to new high-yield DeFi-projects
                  and NFTs where you can take advantage of the latest blockchain developments
                </span>
                <div className={styles['build-in-section__build-in-img-wrapper']}>
                  <div className={styles['build-in-section__build-in-img']} />
                </div>
              </div>
            </Fade>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BuildInSection;
