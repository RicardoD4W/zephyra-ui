import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

import easyToUse from '@site/static/img/easyToUse.svg';
import seamlessIntegration from '@site/static/img/seamlessIntegration.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Easy to Use',
    Svg: require('@site/static/img/easyToUse.svg').default,
    description: (
      <Translate id="homepage.feature.easyToUse">
        Zephyra UI offers an intuitive and well-documented API, allowing
        developers to build interfaces without a steep learning curve.
      </Translate>
    ),
  },
  {
    title: '🔌 Seamless Integration',
    Svg: require('@site/static/img/seamlessIntegration.svg').default,
    description: (
      <Translate id="homepage.feature.seamlessIntegration">
        Compatible with any modern stack, Zephyra UI easily adapts to existing
        projects without complex configurations or unnecessary dependencies.
      </Translate>
    ),
  },
  {
    title: '🎨 Total Customization',
    Svg: require('@site/static/img/seamlessIntegration.svg').default,
    description: (
      <Translate id="homepage.feature.totalCustomization">
        Designed with flexibility in mind, Zephyra UI allows you to modify
        styles, themes, and components without restrictions, ensuring every
        project maintains its visual identity.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
