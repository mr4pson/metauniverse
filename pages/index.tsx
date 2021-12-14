import { Header } from 'modules';
import Head from 'next/head';
import Link from 'next/link';
import { Page, paths } from 'routes/constants';
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
          What's a Dendy Metaverse ?
        </div>
      </div>
    </>
  );
};

export default IndexPage;
