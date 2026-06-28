import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const sections = [
  {
    title: 'Client Docs',
    description: 'Install Minecraft, manage versions, add mods, and use resource packs.',
    to: '/docs/client/',
  },
  {
    title: 'Server Docs',
    description: 'Set up servers, configure settings, install plugins, and tune performance.',
    to: '/docs/server/',
  },
  {
    title: 'Reference',
    description: 'Look up common commands and version compatibility guidance.',
    to: '/docs/reference/',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Minecraft Docs
        </Heading>
        <p className="hero__subtitle">
          Simple client-side and server-side Minecraft documentation.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Open the docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Minecraft Docs"
      description="Client-side and server-side Minecraft documentation">
      <HomepageHeader />
      <main>
        <section className={styles.cards}>
          <div className="container">
            <div className="row">
              {sections.map((section) => (
                <div className="col col--4" key={section.title}>
                  <div className={styles.card}>
                    <Heading as="h2">{section.title}</Heading>
                    <p>{section.description}</p>
                    <Link to={section.to}>Read {section.title}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
