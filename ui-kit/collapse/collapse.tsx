import styles from './collapse.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { BottomArrowIcon } from 'public/icons';

type Props = {
  wrapperClassName?: string;
  title: string;
  children: string;
}

const Collapse = ({
  wrapperClassName,
  title,
  children
}: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className={styles['collapse-wrapper']}>
      <button
        type="button"
        className={styles['collapse__action-btn']}
        onClick={() => setCollapsed(!collapsed)}
      >
        <BottomArrowIcon className={classNames(styles['collapse__arrow-icon'], {
          [styles['collapse__arrow-icon_turned']]: !collapsed
        })}
        />
      </button>
      <div
        className={classNames(wrapperClassName, styles['collapse'], {
            [styles['collapse--collapsed']]: collapsed,
        })}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className={styles['collapse__body']}>
          <div className={styles['collapse__title']}>
            {title}
          </div>
          {
            collapsed && (
              <div className={styles['collapse__divider']}>
                <div className={styles['collapse__divider--left']} />
                <div className={styles['collapse__divider--right']} />
              </div>
            )
          }
        </div>
        <div className={styles['collapse__content']}>{children}</div>
      </div>
    </div>
  )
}

export default Collapse;
