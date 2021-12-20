import { SectionTitle } from 'modules';
import styles from './about-ido-section.module.scss';
import classNames from 'classnames';
import { Button, Input } from 'ui-kit';
import { RightArrowIcon } from 'public/icons';
import { useEffect, useState } from 'react';
import { Modal } from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';
import { getSteps } from './helper';
import { useWindowSize } from 'hooks';
import { ButtonTypes } from 'ui-kit/button';
import { CloseIcon } from 'public/icons/close-icon';

const AboutIdoSection = (): JSX.Element => {
  const { modalIsOpen, handleClose: handleModalClose, handleOpen: handleModalOpen } = useModal();

  const [scrollY, setScrollY] = useState(0);
  const [isNotifyShown, setNotifyShown] = useState(false);
  const [isNotifyWasOpen, setIsNotifyWasOpen] = useState(false);

  const size = useWindowSize();

  const handleSubmit = (e) => {
    console.log(e.target.email.value);
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
        <div className={styles['about-ido__body']}>
          <h3 className={styles['about-ido__title']}>
            HOW CAN I TAKE PART IN IDO? FIVE EASY STEPS TO PROFIT!
          </h3>
          <div className={styles['about-ido__steps']}>
            {
              getSteps(size.width).map((item) => (
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
              ))
            }
          </div>
        </div>
        <div className={styles['about-ido__join-btn']}>
          <Button
            icon={
              <RightArrowIcon />
            }
            onClick={() => handleModalOpen()}
          >
            Join IDO
          </Button>
        </div>
        <div className={styles['about-ido__footer']}>
          <div className={styles['about-ido__question']}>
            <div className={styles['about-ido__big-arrow']} />
            <span className={styles['about-ido__question-text']}>
              Why do I need <br /> to take part in IDO?
            </span>
          </div>
          <div className={styles['about-ido__adventages']}>
            <ul className={styles['about-ido__list']}>
              <li>You can become one of the first investors</li>
              <li>You can get our $MetaDND tokens at a discount</li>
              <li>You can get more benefits from the Dendy Metaverse</li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles['notification-message'], {
          [styles['notification-message_shown']]: isNotifyShown
        })}>
          <div className={styles['notification-message__data']}>
            <span className={styles['notification-message__data-text']}>
              TIME LEFT UNTIL
              IDO STARTS: <br />
              5D 10H 55M 32S
            </span>
          </div>
          <div className={styles['notification-message__body']}>
            <form onSubmit={handleSubmit} className={styles['notification-message__form']}>
              <span className={styles['notification-message__body-info']}>
                Find out all the news before anyone else
              </span>
              <Input
                className={styles['notification-message__input']}
                placeholder='Email address'
                name="email"
              />
              <Button
                className={styles['notification-message__submit-btn']}
                type={ButtonTypes.SUBMIT}
              >
                NOTIFY ME
              </Button>
              <button
                className={styles['notification-message__close-btn']}
                onClick={handleNotifyClose}
              >
                <CloseIcon className={styles['notification-message__close-btn-icon']} />
              </button>
            </form>
          </div>
        </div>
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
