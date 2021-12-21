import Link from 'next/link';
import { getHeaderLinks } from './helpers';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';
import ModalWindow from 'ui-kit/modal-window';
import { useEffect, useState } from 'react';
import { useModal } from 'modules/modal/use-modal';
import { Modal } from 'modules/modal/modal';
import { MenuIcon } from 'public/icons/menu-icon';

const Header = (): JSX.Element => {
  const router = useRouter();
  const [modalContent, setModalContent] = useState({
    text: '',
    date: '',
  });

  const { modalIsOpen, handleClose, handleOpen } = useModal();

  useEffect(() => {
    if (modalContent.text || modalContent.date) {
      handleOpen();
    }
  }, [modalContent])

  return (
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
                  <Link href={linkGroup.link ?? ''}>
                    <span className={classNames(
                      styles['header__link'], 
                      { [styles['header__link_active']]: router.pathname === linkGroup.link }
                      )}
                    >
                      {linkGroup.title}
                    </span>
                  </Link>
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
          <button className={styles["header__menu-btn"]}>
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
  );
};

export default Header;
