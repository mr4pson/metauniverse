import { SectionTitle } from 'modules';
import styles from './about-ido-section.module.scss';
import classNames from 'classnames';
import { Button } from 'ui-kit';
import { RightArrowIcon } from 'public/icons';
import { steps } from './constants';
import { useState } from 'react';
import { Modal } from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';

const AboutIdoSection = (): JSX.Element => {
  const { modalIsOpen, handleClose, handleOpen } = useModal();

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
      <Modal
        title="IDO availability"
        text="Will be available on"
        date={<span>JANUARY 1 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AboutIdoSection;
