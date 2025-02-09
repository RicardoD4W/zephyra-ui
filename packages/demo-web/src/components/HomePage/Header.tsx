import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { BubblesContainer } from '@site/src/components/BubblesContainer/BubblesContainer';
import Heading from '@theme/Heading';

export const Header = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className="relative px-0 py-10 overflow-hidden text-center"
      style={{
        color: 'var(--text-color)',
        backgroundColor: 'var(--banner-color)',
      }}
    >
      <BrowserOnly>
        {() => (
          <BubblesContainer
            bubbleCount={(window.innerWidth / window.innerHeight) * 15}
          />
        )}
      </BrowserOnly>

      <div className="container flex flex-col items-center justify-around gap-2">
        <div className="flex items-center justify-center p-2 text-center">
          <Heading as="h1" className="z-10 mb-0 text-5xl rounded-lg">
            {siteConfig.title}
          </Heading>
        </div>
        <p
          className="z-10 font-semibold hero__subtitle text-balance"
          style={{
            filter: 'drop-shadow(0 0 20px var(--text-s-color))',
          }}
        >
          {siteConfig.tagline}
        </p>
        <p
          className="z-10 w-11/12 px-2 py-4 text-lg rounded-lg md:w-1/2 text-balance backdrop-blur-md"
          style={{ backgroundColor: 'var(--bg-glass)' }}
        >
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
            className="z-10 px-4 py-2 font-bold no-underline transition rounded backdrop-blur-md hover:brightness-110 active:brightness-90"
            style={{
              color: 'var(--text-color)',
              backgroundColor: 'var(--bg-glass)',
            }}
            to="/docs/intro"
          >
            <Translate>Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
};
