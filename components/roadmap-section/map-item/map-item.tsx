import { memo } from 'react';
import { MapPointTypes, TMapPoint } from '../types';
import styles from './map-item.module.scss';
import classNames from "classnames";
import { Fade } from "react-awesome-reveal";

type Props = TMapPoint;

const MapItem = ({ title, date, active, type }: Props): JSX.Element => {

  const getMapItemClassNames = (type: MapPointTypes) => {
    return classNames({
      [styles["map-item"]]: true,
      [styles["map-item--left"]]: type === MapPointTypes.LEFT,
      [styles["map-item--right"]]: type === MapPointTypes.RIGHT,
    });
  };

  const getMapItemRoundClassNames = (isActive: boolean) => {
    return classNames({
      [styles["map-item__round"]]: true,
      [styles["map-item__round--active"]]: isActive,
    });
  };

  return (
      <div className={getMapItemClassNames(type)}>
        <Fade duration={750}>
          <Fade duration={1500} triggerOnce direction={type === MapPointTypes.LEFT ? "left" : "right"}>
            <div className={styles["map-item__info"]}>
              <div className={styles["map-item__title"]}>{title}</div>
              <div className={styles["map-item__date"]}>{date}</div>
            </div>
          </Fade>
        </Fade>
        <div className={getMapItemRoundClassNames(active)}>
          <div className={styles["map-item__inner-round"]}></div>
        </div>
      </div>
  );
};

export default memo(MapItem);
