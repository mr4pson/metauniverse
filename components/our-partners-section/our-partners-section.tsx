import { SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { Fade, Zoom } from "react-awesome-reveal";
import { Button } from 'ui-kit';
import { partnerLinks } from './constants';
import styles from './our-partners-section.module.scss';

const OurPartnersSection = (): JSX.Element => {
  // const { modalIsOpen, handleClose, handleOpen } = useModal();

  return (
    <div className={styles["our-partners"]}>
      <div className="container">
        <SectionTitle
          normalText="Our"
          wrappedText="Future partners"
          titleInfo="Listing and media partners"
          pageTitleClassName="our-partners__page-title"
        />
        <Fade duration={3500}>
          <div className={styles['our-partners__body']}>
            <Zoom cascade triggerOnce duration={750}>
              {partnerLinks.map((partner, index) => (
                <div
                  key={`partner-link-${index}`}
                  className={styles['our-partners__image']}
                  style={{ backgroundImage: `url(${partner.imgUrl})` }}
                />
              ))}
            </Zoom>
          </div>
          <div className={styles['our-partners__footer']}>
            <a
              className={styles["our-partners__link"]}
              href="https://poocoin.app/tokens/0x68745256cc11c8ee92cf918a8cc6bbd2618cadde"
              target="_blank"
            >
              <Button
                icon={
                  <RightArrowIcon />
                }
              >
                View the chart
              </Button>
            </a>
          </div>
        </Fade>
      </div>
      {/* <Modal
        title="Partners availability"
        text="Will be available on"
        date={<span>JANUARY 20 <br />2022</span>}
        modalIsOpen={modalIsOpen}
        handleClose={handleClose}
      /> */}
    </div>
  );
};

export default OurPartnersSection;
