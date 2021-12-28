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
import FaqSection from 'components/faq-section';
import { ScrollTopIcon } from 'public/icons';
import PageFooter from 'components/page-footer';
import AboutIdoSection from 'components/about-ido-section';

const IndexPage = (): JSX.Element => {
  function goToTopOfPage(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Head>
        <title>Dendy Metaverse</title>
        <meta
          name="description"
          content="Is an innovative DeFi game platform based on the Play-to-Earn concept"
        />
        <meta property="og:title" content="Dendy Metaverse" />
        <meta property="og:site_name" content="Dendy Metaverse"/>
        <meta property="og:description" content="Is an innovative DeFi game platform based on the Play-to-Earn concept" />
        <meta property="og:image" content="/assets/preview.jpg" />
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
        <FaqSection />
        <AboutIdoSection />
        <button
          className={styles["scroll-top-btn"]}
          onClick={goToTopOfPage}
        >
          <ScrollTopIcon />
        </button>
        <PageFooter />
      </div>
    </>
  );
};

export default IndexPage;
