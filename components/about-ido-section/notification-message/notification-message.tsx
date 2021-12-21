import classNames from 'classnames';
import { CloseIcon } from 'public/icons/close-icon';
import { Button, Input } from 'ui-kit';
import { ButtonTypes } from 'ui-kit/button';
import Countdown from "react-countdown";
import styles from './notification-message.module.scss';
import { useState } from 'react';

type Props = {
  isNotifyShown: boolean;
  handleSubmit: (e: any) => void;
  handleNotifyClose: () => void;
}

const END_DATE_TIME = new Date(2022, 0, 17, 20).getTime();

const NotificationMessage = ({
  isNotifyShown,
  handleSubmit,
  handleNotifyClose,
}: Props): JSX.Element => {

  const [countDownTime, setCountDownTime] = useState(END_DATE_TIME + 10000);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  return (
    <div className={classNames(styles['notification-message'], {
      [styles['notification-message_shown']]: isNotifyShown
    })}>
      <div className={styles["notification-message__container"]}>
        <div className={styles['notification-message__data']}>
          <span className={styles['notification-message__data-text']}>
            <span className={styles["notification-message__label"]}>
              TIME LEFT UNTIL
              IDO STARTS: <br />
            </span>

            <Countdown
              className={styles["notification-message__timer"]}
              date={countDownTime}
              onTick={() => setCountDownTime(countDownTime)}
              renderer={({ days, hours ,minutes, seconds }) => {
                return (
                  <span className="countdown__timer">
                    {!isCountdownComplete ? `${days}D ${hours}H ${minutes}M ${seconds}S` : 'IDO has started'}
                  </span>
                );
              }}
              onComplete={() => setIsCountdownComplete(true)}
            />
          </span>
        </div>
        <div className={styles['notification-message__body']}>
          <form onSubmit={handleSubmit} className={styles['notification-message__form']}>
            <span className={styles['notification-message__body-info']}>
              Find out all the news before anyone else
            </span>
            <div className={styles["notification-message__controls"]}>
              <Input
                className={styles['notification-message__input']}
                placeholder='EMAIL ADDRESS'
                name="email"
              />
              <Button
                className={styles['notification-message__submit-btn']}
                type={ButtonTypes.SUBMIT}
              >
                NOTIFY ME
              </Button>
            </div>
          </form>
        </div>
        <button
          className={styles['notification-message__close-btn']}
          onClick={handleNotifyClose}
        >
          <CloseIcon className={styles['notification-message__close-btn-icon']} />
        </button>
      </div>
    </div>
  )
};

export default NotificationMessage;
