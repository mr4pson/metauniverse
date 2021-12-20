import classNames from 'classnames';
import { CloseIcon } from 'public/icons/close-icon';
import { Button, Input } from 'ui-kit';
import { ButtonTypes } from 'ui-kit/button';
import styles from './notification-message.module.scss';

type Props = {
  isNotifyShown: boolean;
  handleSubmit: (e: any) => void;
  handleNotifyClose: () => void;
}

const NotificationMessage = ({
  isNotifyShown,
  handleSubmit,
  handleNotifyClose,
}: Props): JSX.Element => (
  <div className={classNames(styles['notification-message'], {
    [styles['notification-message_shown']]: isNotifyShown
  })}>
    <div className={styles['notification-message__data']}>
      <span className={styles['notification-message__data-text']}>
        TIME LEFT UNTIL
        IDO STARTS: <br />
        5D 10H 55M 32S
      </span>
    </div>
    <div className={styles['notification-message__body']}>
      <form onSubmit={handleSubmit} className={styles['notification-message__form']}>
        <span className={styles['notification-message__body-info']}>
          Find out all the news before anyone else
        </span>
        <Input
          className={styles['notification-message__input']}
          placeholder='Email address'
          name="email"
        />
        <Button
          className={styles['notification-message__submit-btn']}
          type={ButtonTypes.SUBMIT}
        >
          NOTIFY ME
        </Button>
        <button
          className={styles['notification-message__close-btn']}
          onClick={handleNotifyClose}
        >
          <CloseIcon className={styles['notification-message__close-btn-icon']} />
        </button>
      </form>
    </div>
  </div>
);

export default NotificationMessage;
