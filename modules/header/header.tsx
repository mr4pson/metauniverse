import Head from 'next/head';
import Link from 'next/link';
import { headerLinks } from './constants';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles["header"]}>
      <div className={classNames("container", styles["container"])}>
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
              headerLinks.map(linkGroup => (
                <div className={styles['header__link-group']}>
                  <Link href={linkGroup.link}>
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
    </div>
  );
};

export default Header;
