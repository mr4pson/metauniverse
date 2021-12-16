import { Header, PageTitle } from 'modules';
import { RightArrowIcon } from 'public/icons';
import { memo } from 'react';
import { Button } from 'ui-kit';
import styles from './section-title.module.scss';

type Props = {
  normalText: string;
  wrappedText: string;
  titleInfo: string | JSX.Element;
  withControls?: boolean;
}

const SectionTitle = ({
  normalText,
  wrappedText,
  titleInfo,
  withControls,
}: Props): JSX.Element => {
  return (
    <div className={styles["section-title"]}>
      <div className={styles["section-title__wrapper"]}>
        <div className={styles["section-title__info"]}>
          <span className={styles["section-title__info-text"]}>
            {titleInfo}
          </span>
        </div>
        <div className={styles["page-title"]}>
          <PageTitle
            className={styles["page-title__container"]}
            normalText={normalText}
            wrappedText={wrappedText}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
