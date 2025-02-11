import { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Features from '@site/src/components/HomePage/Feature';
import { Header } from '../components/HomePage/Header';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <Header />
      <main
        className="content-center flex-1"
        style={{ backgroundColor: 'var(--bg-content-color)' }}
      >
        <Features />
      </main>
    </Layout>
  );
}
