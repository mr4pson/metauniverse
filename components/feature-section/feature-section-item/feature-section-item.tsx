import styles from './feature-section-item.module.scss';

type Props = {
  icon: JSX.Element;
  title: string | JSX.Element;
  text: string;
}

const FeatureSectionItem = ({
  icon,
  title,
  text,
}: Props): JSX.Element => {
  return (
    <div className={styles["feature-section-item"]}>
      <div className={styles['feature-section-item__icon']}>{icon}</div>
      <h3 className={styles["feature-section-item__title"]}>
        {title}
      </h3>
      <div className={styles["feature-section-item__text"]}>
        {text}
      </div>
    </div>
  );
};

export default FeatureSectionItem;
