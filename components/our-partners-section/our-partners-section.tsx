import { SectionTitle } from 'modules';
import Modal from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';
import { RightArrowIcon } from 'public/icons';
import { Fade, Zoom } from "react-awesome-reveal";
import { Button } from 'ui-kit';
import { partnerLinks } from './constants';
import styles from './our-partners-section.module.scss';

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
        <Fade duration={3500}>
          <div className={styles['our-partners__body']}>
            <Zoom cascade triggerOnce duration={750}>
              {partnerLinks.map((partner) => (
                <div
                  className={styles['our-partners__image']}
                  style={{ backgroundImage: `url(${partner.imgUrl})` }}
                />
              ))}
            </Zoom>
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
        </Fade>
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
