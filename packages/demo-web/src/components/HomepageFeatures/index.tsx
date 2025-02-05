import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Easy to Use',
    description: (
      <Translate id="homepage.feature.easyToUse">
        Zephyra UI offers an intuitive and well-documented API, allowing
        developers to build interfaces without a steep learning curve.
      </Translate>
    ),
  },
  {
    title: '🔌 Seamless Integration',
    description: (
      <Translate id="homepage.feature.seamlessIntegration">
        Compatible with any modern stack, Zephyra UI easily adapts to existing
        projects without complex configurations or unnecessary dependencies.
      </Translate>
    ),
  },
  {
    title: '🎨 Total Customization',
    description: (
      <Translate id="homepage.feature.totalCustomization">
        Designed with flexibility in mind, Zephyra UI allows you to modify
        styles, themes, and components without restrictions, ensuring every
        project maintains its visual identity.
      </Translate>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div
      className="flex flex-col items-center justify-center w-full p-5 rounded min-h-60 md:w-1/3 "
      style={{ backgroundColor: 'var(--bg-content-box-color)' }}
    >
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="flex flex-col items-center h-full gap-5 md:flex-row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
