import { links, mediaIcons, products } from './constants';
import styles from './page-footer.module.scss';
import { Fade } from 'react-awesome-reveal';
import classNames from 'classnames';
import { getProductLinks } from './helpers';
import { useEffect, useState } from 'react';
import { useModal } from 'modules/modal/use-modal';
import Modal from 'modules/modal';

const PageFooter = (): JSX.Element => {
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
    <div className={styles["page-footer"]}>
      <div className={styles["page-footer__social-media"]}>
        <Fade duration={1500}>
          <Fade duration={1250} triggerOnce direction="up">
            <h3 className={styles["page-footer__title"]}>Social media:</h3>
            <div className={styles["page-footer__media-icons"]}>
              {mediaIcons.map((item, index) => (
                <a 
                  key={`media-icon-${index}`}
                  href={item.link}
                  target="_blank"
                >
                  <div
                    className={styles['page-footer__media-icon']}
                    key={item.id}
                    style={
                      item.withSmallHeight ? { backgroundImage: `url(${item.img})`, height: 25 }
                      : { backgroundImage: `url(${item.img})` }
                    }
                  />
                </a>
                ))}
            </div>
          </Fade>
        </Fade>
      </div>
      <div className={styles["page-footer__links-and-products"]}>
        <Fade duration={1500}>
          <Fade duration={1250} triggerOnce direction="up">
            <div className={styles["page-footer__groups-wrapper"]}>
              <div className={styles["page-footer__group"]}>
                <h3 className={classNames(styles["page-footer__title"], styles["page-footer__title_bottom"])}>Useful links:</h3>
                <div className={styles["page-footer__links"]}>
                  {links.map(link => (
                    <a
                      className={styles["page-footer__link"]}
                      key={link.id}
                      href={link.link}
                    >
                      {link.title}
                    </a>
                    ))}
                </div>
              </div>
              <div className={styles["page-footer__group"]}>
                <h3 className={classNames(styles["page-footer__title"], styles["page-footer__title_bottom"])}>Products:</h3>
                <div className={styles["page-footer__links"]}>
                  {getProductLinks(setModalContent).map(product => (
                    <span
                      className={styles["page-footer__link"]}
                      key={product.id}
                      onClick={product.onClick}
                    >
                      {/* <Link href={linkGroup.link ?? ''}> TODO: after january 2020 */}
                      {product.title}
                      {/* </Link> */}
                    </span>
                    ))}
                </div>
              </div>
            </div>
            <div className={styles["page-footer__copyright"]}>
              © Copyright Dendy Metaverse Ink. All Rights Reserved
            </div>
          </Fade>
        </Fade>
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

export default PageFooter;
