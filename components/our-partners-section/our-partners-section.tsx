import { Header, PageTitle, SectionTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Button } from 'ui-kit';
import styles from './our-partners-section.module.scss';
import classNames from 'classnames';
import { partnerLinks } from './constants';

const OurPartnersSection = (): JSX.Element => {
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
          >
            View the chart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurPartnersSection;
