import { DECREMENTAL_VALUE, INCREMENTAL_VALUE } from 'common/constants';
import { PageTitle } from 'modules';
import { LeftArrowIcon, RightArrowIcon } from 'public/icons';
import styles from './section-title.module.scss';

type Props = {
  normalText: string;
  wrappedText: string;
  titleInfo: string | JSX.Element;
  withControls?: boolean;
  handleChooseNftIndex?: (updatingValue: number) => void
}

const SectionTitle = ({
  normalText,
  wrappedText,
  titleInfo,
  withControls,
  handleChooseNftIndex,
}: Props): JSX.Element => {

  return (
    <div className={styles["section-title"]}>
      <div className={styles["section-title__wrapper"]}>
        <div className={styles["section-title__info"]}>
          <div className={styles["section-title__info-text"]}>
            {titleInfo}
          </div>
          {
            withControls && <div className={styles["section-title__controls"]}>
              <button
                className={styles["section-title__controls-btn"]}
                onClick={() => handleChooseNftIndex && handleChooseNftIndex(DECREMENTAL_VALUE)}
              >
                <LeftArrowIcon />
              </button>
              <button
                className={styles["section-title__controls-btn"]}
                onClick={() => handleChooseNftIndex && handleChooseNftIndex(INCREMENTAL_VALUE)} 
              >
                <RightArrowIcon />
              </button>
            </div>
          }
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
