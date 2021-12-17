import { memo } from 'react';
import { MapPointTypes, TMapPoint } from '../types';
import styles from './map-item.module.scss';
import classNames from "classnames";

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
      <div className={styles["map-item__info"]}>
        <div className={styles["map-item__title"]}>{title}</div>
        <div className={styles["map-item__date"]}>{date}</div>
      </div>
      <div className={getMapItemRoundClassNames(active)}>
        <div className={styles["map-item__inner-round"]}></div>
      </div>
    </div>
  );
};

export default memo(MapItem);
