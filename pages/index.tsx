import RoadmapSection from 'components/roadmap-section';
import TokenomicsSection from 'components/tokenomics-section';
import { Header } from 'modules';
import Head from 'next/head';
import IntroductionSection from '../components/introduction-section';
import FeatureSection from 'components/feature-section';
import OurNftsSection from 'components/our-nfts-section';
import styles from './index.module.scss';
import BuildInSection from 'components/build-in-section';
import OurPartnersSection from 'components/our-partners-section';

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
        <FeatureSection />
        <OurNftsSection />
        <TokenomicsSection />
        <RoadmapSection />
        <BuildInSection />
        <OurPartnersSection />
      </div>
    </>
  );
};

export default IndexPage;
