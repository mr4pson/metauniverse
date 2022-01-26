import axios from 'axios';
import classNames from 'classnames';
import { SectionTitle } from 'modules';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from './build-in-section.module.scss';
import NotificationMessage from './../about-ido-section/notification-message';

const BuildInSection = (): JSX.Element => {
  const [isNotifyShown, setNotifyShown] = useState(false);
  const [isNotifyWasOpen, setIsNotifyWasOpen] = useState(false);
  
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (): void => {
    setScrollY(window.scrollY);
  };

  const handleNotifyClose = (): void => {
    setNotifyShown(false);
    window.removeEventListener("scroll", handleScroll);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    if (email) {
      const response = await axios.get(`/api/subscribe?email=${email}`);
      console.log(response);
      email = "";
      handleNotifyClose();
    }

    e.preventDefault();
  }

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 4000 && !isNotifyShown && !isNotifyWasOpen) {
      setTimeout(() => {
        setNotifyShown(true);
        setIsNotifyWasOpen(true);
      }, 3000)
    }
  }, [scrollY])

  return (
    <div className={classNames(styles["build-in-section"], "build-in-section")}>
      <div className={classNames("container", "build-in-container")}>
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
        <NotificationMessage
          isNotifyShown={isNotifyShown}
          handleSubmit={handleSubmit}
          handleNotifyClose={handleNotifyClose}
        />
      </div>
    </div>
  );
};

export default BuildInSection;
