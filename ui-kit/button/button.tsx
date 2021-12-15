import styles from './button.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
  children?: React.ReactNode;
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({
  className,
  children,
  icon,
  onClick,
}: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={classNames(className, styles['button'])}>
      {children}
      <div className={styles['button__icon']}>{icon}</div>
    </button>
  );
};

export default Button;
