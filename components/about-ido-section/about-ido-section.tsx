import { SectionTitle } from 'modules';
import styles from './about-ido-section.module.scss';
import classNames from 'classnames';
import { Button } from 'ui-kit';
import { RightArrowIcon } from 'public/icons';
import { steps } from './constants';
import { useState } from 'react';
import ModalWindow from 'ui-kit/modal-window';

const AboutIdoSection = (): JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

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
              steps.map((item) => (
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
        <div className={styles['about-ido__footer']}>
          <Button
            icon={
              <RightArrowIcon />
            }
            onClick={() => handleOpen()}
          >
            Join IDO
          </Button>
        </div>
      </div>
      <ModalWindow
        title='IDO availability'
        isModalOpen={modalIsOpen}
        handleClose={handleClose}
      >
        <div className={styles['modal__content']}>
          <span className={styles['modal__text']}>
            Will be available on
          </span>
          <span className={styles['modal__date']}>
            JANUARY 1 <br />2022
          </span>
        </div>
      </ModalWindow>
    </div>
  );
};

export default AboutIdoSection;
