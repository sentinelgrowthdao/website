import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who We Are',
    Svg: require('@site/static/img/sentinel.svg').default,
    description: (
      <>  
        We are a team of committed representatives, each having made substantial contributions to Sentinel in the past. Each member holds a voting share, fostering a democratic and inclusive decision-making process within our team.
      </>
    ),
  },
  {
    title: 'DAO Validator',
    Svg: require('@site/static/img/validator.svg').default,
    description: (
      <>
        The DAO validator utilizes community resources for Sentinel Network Enhancement. Rewards earned will be allocated for either redelegation or utilized to fuel various DAO initiatives.
      </>
    ),
  },
  {
    title: 'P2P News',
    Svg: require('@site/static/img/news.svg').default,
    description: (
      <>
        p2p.news is a comprehensive platform committed to covering all aspects of DAO Operations, decentralized VPNs, Privacy, and Security.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
