import { SectionTitle } from 'modules';
import styles from './about-ido-section.module.scss';
import classNames from 'classnames';
import { Button } from 'ui-kit';
import { RightArrowIcon } from 'public/icons';
import { useEffect, useState } from 'react';
import Modal from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';
import { getSteps } from './helper';
import { useWindowSize } from 'hooks';
import NotificationMessage from './notification-message';
import { Fade, Zoom } from "react-awesome-reveal";

const AboutIdoSection = (): JSX.Element => {
  const { modalIsOpen, handleClose: handleModalClose, handleOpen: handleModalOpen } = useModal();

  const [scrollY, setScrollY] = useState(0);
  const [isNotifyShown, setNotifyShown] = useState(false);
  const [isNotifyWasOpen, setIsNotifyWasOpen] = useState(false);

  const size = useWindowSize();

  const handleSubmit = (e) => {
    console.log(e.target.email.value);
    if (e.target.email.value) {
      e.target.email.value = "";
    }

    e.preventDefault();
  }

  const handleScroll = (): void => {
    setScrollY(window.scrollY);
  };

  const handleNotifyClose = (): void => {
    setNotifyShown(false)
    window.removeEventListener("scroll", handleScroll);
  }

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 7000 && !isNotifyShown && !isNotifyWasOpen) {
      setTimeout(() => {
        setNotifyShown(true);
        setIsNotifyWasOpen(true);
      }, 3000)
    }
  }, [scrollY])

  return (
    <div className={styles["about-ido"]}>
      <div className="container">
        <SectionTitle
          normalText="About"
          wrappedText="IDO"
          titleInfo="IDO is PRESALE of our token"
        />
        <Fade duration={3500}>
          <div className={styles['about-ido__body']}>
            <Fade duration={1250} triggerOnce direction="left">
              <h3 className={styles['about-ido__title']}>
                HOW CAN I TAKE PART IN IDO? FIVE EASY STEPS TO PROFIT!
              </h3>
            </Fade>
            <div className={styles['about-ido__steps']}>
              <Fade direction="down" cascade triggerOnce duration={750}>
                {getSteps(size.width).map((item) => (
                  <div key={item.id} className={styles['ido-step']}>
                    <span className={classNames(styles['ido-step__number'], {
                      [styles['ido-step__number_green']]: item.greenNumber
                    })}>
                      {item.number}
                    </span>
                    <span className={styles['ido-step__text']}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
          <div className={styles['about-ido__join-btn']}>
            <Fade duration={1250} triggerOnce direction="right">
              <Button
                icon={
                  <RightArrowIcon />
                }
                onClick={() => handleModalOpen()}
              >
                Join IDO
              </Button>
            </Fade>
          </div>
          <Zoom cascade triggerOnce duration={1750}>
            <div className={styles['about-ido__footer']}>
              <div className={styles['about-ido__question']}>
                <div className={styles['about-ido__big-arrow']} />
                <span className={styles['about-ido__question-text']}>
                  Why do I need <br /> to take part in IDO?
                </span>
              </div>
              <div className={styles['about-ido__advantages']}>
                <ul className={styles['about-ido__list']}>
                  <li>- You can become one of the first investors</li>
                  <li>- You can get our $MetaDND tokens at a discount</li>
                  <li>- You can get more benefits from the Dendy Metaverse</li>
                </ul>
              </div>
            </div>
          </Zoom>
        </Fade>
        <NotificationMessage
          isNotifyShown={isNotifyShown}
          handleSubmit={handleSubmit}
          handleNotifyClose={handleNotifyClose}
        />
      </div>
      <Modal
        title="IDO availability"
        text="Will be available on"
        date={<span>JANUARY 1 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleModalClose}
      />
    </div>
  );
};

export default AboutIdoSection;

export async function getServerSideProps(context): Promise<{ props: {} }> {
  return {
    props: {}, // will be passed to the page component as props
  }
}
