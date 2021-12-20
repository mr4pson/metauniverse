import Head from 'next/head';
import Link from 'next/link';
import { getHeaderLinks } from './helpers';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';
import ModalWindow from 'ui-kit/modal-window';
import { useEffect, useState } from 'react';

const Header = (): JSX.Element => {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    text: '',
    date: '',
  });

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  useEffect(() => {
    if (modalContent.text || modalContent.date) {
      handleOpen();
    }
  }, [modalContent])

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["header__logo-links-wrapper"]}>
          <Image
            className={styles['header__logo']}
            onClick={() => router.push('/')}
            src="/assets/Logo.png"
            alt="Logo"
            width="67"
            height="53"
          />
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
        </div>
      </div>
      <ModalWindow
        title='IDO availability'
        isModalOpen={modalIsOpen}
        handleClose={handleClose}
      >
        <div className={styles['modal__content']}>
          <span className={styles['modal__text']}>
            {modalContent.text}
          </span>
          <span className={styles['modal__date']}>
            {modalContent.date}
          </span>
        </div>
      </ModalWindow>
    </div>
  );
};

export default Header;
