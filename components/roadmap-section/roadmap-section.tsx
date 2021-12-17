import { SectionTitle } from 'modules';
import { memo } from 'react';
import { mapPoints } from './constants';
import MapItem from './map-item';
import styles from './roadmap-section.module.scss';

const RoadmapSection = (): JSX.Element => {
  
  return (
    <div className={styles["roadmap-section"]}>
      <div className={"container"}>
        <SectionTitle
          normalText="Our"
          wrappedText="Roadmap"
          titleInfo={
            <span>The project is based<br /> on the innovative<br /> Dendy smart protocol</span>
          }
        />
        <div className={styles['roadmap-section__body']}>
          <div className={styles["map-items"]}>
            {mapPoints.map(mapPoint => (
              <MapItem {...mapPoint} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RoadmapSection);
