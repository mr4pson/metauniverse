import classNames from 'classnames';
import Modal from 'modules/modal/modal';
import { useModal } from 'modules/modal/use-modal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon } from 'public/icons/menu-icon';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { getHeaderLinks } from './helpers';
import { CloseIcon } from 'public/icons/close-icon';

const Header = (): JSX.Element => {
  const router = useRouter();
  const [modalContent, setModalContent] = useState({
    text: '',
    date: '',
  });

  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(false);

  const { modalIsOpen, handleClose, handleOpen } = useModal();

  const handleMenuClick = () => {
    setIsMobileHeaderVisible(prev => !prev);
  }

  useEffect(() => {
    if (modalContent.text || modalContent.date) {
      handleOpen();
    }
  }, [modalContent])

  return (
    <>
      <div className={styles["header"]}>
        <div className={classNames("container", styles["container"])}>
          <div className={styles["header__logo-links-wrapper"]}>
            <div
              className={styles['header__logo']}
              onClick={() => router.push('/')}
            ></div>
            <div className={styles['header__links']}>
              {
                getHeaderLinks(setModalContent).map(linkGroup => (
                  <div onClick={linkGroup.onClick} className={styles['header__link-group']}>
                    {/* <Link href={linkGroup.link ?? ''}> TODO: after january 2020 */}
                      <span className={classNames(
                        styles['header__link'], 
                        { [styles['header__link_active']]: router.pathname === linkGroup.link }
                        )}
                      >
                        {linkGroup.title}
                      </span>
                    {/* </Link> */}
                    {
                      linkGroup.isDividerExist && (<div className={
                      classNames(
                        styles['vertical-divider'], 
                        { [styles['vertical-divider_active']]: router.pathname === linkGroup.link }
                      )} 
                    />)
                    }
                  </div>
                ))
              }
            </div>
            <button onClick={handleMenuClick} className={styles["header__menu-btn"]}>
              <MenuIcon />
            </button>
          </div>
        </div>
        <Modal
          title="Page availability"
          text={modalContent.text}
          date={modalContent.date}
          modalIsOpen={modalIsOpen}
          handleClose={handleClose}
        />
      </div>
      <div 
        style={{ display: isMobileHeaderVisible ? 'block' : 'none' }}
        className={styles["mobile-header"]}
      >
        <div className={styles["mobile-header__actions-wrap"]}>
          <button
            onClick={handleMenuClick}
            className={styles["mobile-header__close-btn"]}
          >
            <CloseIcon className={styles['modal__close-btn-icon']} />
          </button>
        </div>
        <div className={styles["mobile-header__body"]}>
          {getHeaderLinks(setModalContent).map(linkGroup => (
            <div onClick={linkGroup.onClick} className={styles['mobile-header__link-group']}>
              {/* <Link href={linkGroup.link ?? ''}> TODO: after january 2020 */}
                <span className={classNames(
                  styles['mobile-header__link'], 
                  { [styles['mobile-header__link_active']]: router.pathname === linkGroup.link }
                  )}
                >
                  {linkGroup.title}
                </span>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
