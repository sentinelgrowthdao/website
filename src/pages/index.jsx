import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';

export default function Home() {
  return (
    <Layout
      title="Sentinel P2P Growth DAO"
      description="Your gateway to maximum privacy and growth within the Sentinel P2P ecosystem."
      wrapperClassName="homepage">
      <div className="pad">
        <div className="center homepage-content">
          <section className="hero-section" aria-labelledby="hero-heading">
            <div className="hero-glow" aria-hidden="true" />
            <h1 id="hero-heading" className="hero-title">
              <span className="hero-title-gradient">Sentinel P2P</span>
              {' '}Growth DAO
            </h1>
            <p className="hero-subtitle">
              Your gateway to maximum privacy and growth within the Sentinel
              P2P ecosystem. A community-run DAO funding infrastructure,
              validators, and independent journalism.
            </p>
            <div className="hero-actions">
              <Link to="/docs/get-started/intro" className="hero-cta-primary">
                Get Started <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/docs/infrastructure/validator"
                className="hero-cta-secondary">
                Infrastructure
              </Link>
              <Link
                to="https://p2pscan.com/validator/sentvaloper1t7f57wx8lfm8y4eeq5vk2cf5cnsq5d729suayz"
                className="hero-cta-secondary">
                Stake with us
              </Link>
              <Link to="https://www.p2p.news" className="hero-cta-secondary">
                P2P News
              </Link>
            </div>
          </section>

          <Section title="The DAO" accentColor="#1a90ff">
            <Card
              title="Who We Are"
              description="A team of committed representatives who have made substantial contributions to Sentinel. Each member holds a voting share, fostering a democratic and inclusive decision-making process."
              to="/docs/get-started/members"
              svgFile="/img/sentinel.svg"
            />
            <Card
              title="DAO Validator"
              description="The DAO validator utilizes community resources for Sentinel network enhancement. Rewards earned are allocated to redelegation or to fuel various DAO initiatives."
              to="/docs/infrastructure/validator"
              svgFile="/img/validator.svg"
            />
            <Card
              title="P2P News"
              description="p2p.news is a comprehensive platform committed to covering DAO operations, decentralized VPNs, privacy, and security."
              to="https://www.p2p.news"
              svgFile="/img/news.svg"
            />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
