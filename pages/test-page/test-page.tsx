import Head from 'next/head';
import Link from 'next/link';
import { Page, paths } from 'routes/constants';
import styles from './test-page.module.scss';

const TestPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Test | NEXT REALWORLD</title>
        <meta
          name="description"
          content="Test desc"
        />
      </Head>
      <div className={styles["test-page"]}>
        Test page
        <Link href={paths[Page.HOME]}>Home page</Link>
      </div>
    </>
  );
};

export default TestPage;
