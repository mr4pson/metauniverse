import { Header, PageTitle } from 'modules';
import Head from 'next/head';
import { RightArrowIcon } from 'public/icons';
import { Button } from 'ui-kit';
import styles from './index.module.scss';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>HOME | NEXT REALWORLD</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <Header />
      <div className={styles['page-wrapper']}>
        <div className={styles["index-page"]}>
          <div className={styles["page-title"]}>
            <PageTitle className={styles["page-title__top"]} normalText={"What's a"} wrappedText={"Dendy"} />
            <div className={styles["page-title__bottom"]}>Metaverse?</div>
          </div>
          <div className={styles['page-description']}>
            The Dendy Metaverse is an innovative DeFi game platform based on the Play to Earn concept. 
            With us you can play the most popular seven 
            Dendy games straight from your childhood.
            <br />We also have Dendy Swap and Dandy Launchpad!
            It's never been easier to earn!
          </div>
          <div className={styles['footer']}>
            <Button
              icon={
                <RightArrowIcon />
              }
            >
              White Paper
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
