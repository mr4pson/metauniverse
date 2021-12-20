import { Header, PageTitle, SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Button } from 'ui-kit';
import styles from './our-partners-section.module.scss';
import classNames from 'classnames';
import { partnerLinks } from './constants';
import { Modal } from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';

const OurPartnersSection = (): JSX.Element => {
  const { modalIsOpen, handleClose, handleOpen } = useModal();

  return (
    <div className={styles["our-partners"]}>
      <div className="container">
        <SectionTitle
          normalText="Our"
          wrappedText="Partners"
          titleInfo="Listing and media partners"
        />
        <div className={styles['our-partners__body']}>
          {
            partnerLinks.map((partner) => (
              <div
                className={styles['our-partners__image']}
                style={{ backgroundImage: `url(${partner.imgUrl})` }}
              />
            ))
          }
        </div>
        <div className={styles['our-partners__footer']}>
          <Button
            icon={
              <RightArrowIcon />
            }
            onClick={handleOpen}
          >
            View the chart
          </Button>
        </div>
      </div>
      <Modal
        title="Partners availability"
        text="Will be available on"
        date={<span>JANUARY 20 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default OurPartnersSection;
