import { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className="hero hero--primary px-0 py-10 text-center relative overflow-hidden"
      style={{ color: 'var(--text)' }}
    >
      <div className="container flex flex-col items-center justify-around gap-2">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text-balance">{siteConfig.tagline} </p>
        <p className="text-lg text-balance">
          <Translate id="homepage.header.description">
            Zephyra UI is a modern and accessible reusable web component library
            designed to make it easy to develop user interfaces with
            high-performance components. Built with Lit, and TypeScript, Zephyra
            UI offers a set of ready-to-use components that can be easily
            integrated into any web application. Its modular and lightweight
            design allows developers to customize and extend each component to
            their needs.
          </Translate>
        </p>
        <div className="flex items-center justify-center">
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate>Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
