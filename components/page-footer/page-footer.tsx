import { links, mediaIcons, products } from './constants';
import styles from './page-footer.module.scss';
import { Fade } from 'react-awesome-reveal';

const PageFooter = (): JSX.Element => {
  return (
    <div className={styles["page-footer"]}>
      <div className={styles["page-footer__social-media"]}>
        <Fade duration={1500}>
          <Fade duration={1250} triggerOnce direction="up">
            <h3 className={styles["page-footer__title"]}>Social media:</h3>
            <div className={styles["page-footer__media-icons"]}>
              {mediaIcons.map((item) => (
                <a href={item.link} target="_blank">
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
                <h3 className={styles["page-footer__title"]}>Useful links:</h3>
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
                <h3 className={styles["page-footer__title"]}>Products:</h3>
                <div className={styles["page-footer__links"]}>
                  {products.map(product => (
                    <a
                      className={styles["page-footer__link"]}
                      key={product.id}
                      href={product.link}
                    >
                      {product.title}
                    </a>
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
    </div>
  );
};

export default PageFooter;
