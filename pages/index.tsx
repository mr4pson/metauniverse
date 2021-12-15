import { Header, PageTitle } from 'modules';
import Head from 'next/head';
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
          <PageTitle className={styles["page-title__top"]} normalText={"What's a"} wrappedText={"Dendy"} />
          <div className={styles["page-title__bottom"]}>Metaverse?</div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
