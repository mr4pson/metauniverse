import styles from './collapse.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  wrapperClassName?: string;
  buttonIcon: any;
  title: string;
  children: string;
}

const Collapse = ({
  wrapperClassName,
  buttonIcon,
  title,
  children
}: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
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
        {/* <div className={styles['collapse__action']}>
          <button 
            type="button"
            className={styles['collapse__action-btn']}
            onClick={() => setCollapsed(!collapsed)}
          >{buttonIcon}</button>
        </div> */}
      </div>
      <div className={styles['collapse__content']}>{children}</div>
    </div>
  )
}

export default Collapse;
