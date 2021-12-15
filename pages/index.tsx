import { Header, PageTitle } from 'modules';
import Head from 'next/head';
import styles from './index.module.scss';
import IntroductionSection from '../components/introduction-section';

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
        <IntroductionSection />
      </div>
    </>
  );
};

export default IndexPage;
