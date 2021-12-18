import { DECREMENTAL_VALUE, INCREMENTAL_VALUE } from 'common/constants';
import { PageTitle } from 'modules';
import { LeftArrowIcon, RightArrowIcon } from 'public/icons';
import styles from './section-title.module.scss';
import classNames from 'classnames';

type Props = {
  normalText: string;
  wrappedText: string;
  titleInfo: string | JSX.Element;
  pageTitleClassName?: string,
  normalTextBottom?: string;
  withControls?: boolean;
  handleChooseNftIndex?: (updatingValue: number) => void
}

const SectionTitle = ({
  normalText,
  normalTextBottom,
  wrappedText,
  pageTitleClassName,
  titleInfo,
  withControls,
  handleChooseNftIndex,
}: Props): JSX.Element => {
  return (
    <div className={styles["section-title"]}>
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
          className={classNames(pageTitleClassName, styles["page-title__container"])}
          normalText={normalText}
          wrappedText={wrappedText}
        />
        {
          normalTextBottom && <div className={styles["page-title_bottom"]}>{normalTextBottom}</div>
        }
      </div>
    </div>
  );
};

export default SectionTitle;
