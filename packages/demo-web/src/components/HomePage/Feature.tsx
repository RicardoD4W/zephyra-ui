import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from '@site/src/components/HomePage/feature.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.feature.easyToUse.title">
        🚀 Easy to Use
      </Translate>
    ),
    description: (
      <Translate id="homepage.feature.easyToUse">
        Zephyra UI offers an intuitive and well-documented API, allowing
        developers to build interfaces without a steep learning curve.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.seamlessIntegration.title">
        🔌 Seamless Integration
      </Translate>
    ),
    description: (
      <Translate id="homepage.feature.seamlessIntegration">
        Compatible with any modern stack, Zephyra UI easily adapts to existing
        projects without complex configurations or unnecessary dependencies.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.totalCustomization.title">
        🎨 Total Customization
      </Translate>
    ),
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

export default function Features(): ReactNode {
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
