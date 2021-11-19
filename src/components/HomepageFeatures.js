import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    img: require('../../static/img/Pioreactor-02__1.png').default,
    description: (
      <>
        Pioreactor was designed from the ground up to be easy to use, but highly customizable.
      </>
    ),
  },
  {
    title: 'Available documentation',
    img: require('../../static/img/documentation.png').default,
    description: (
      <>
        The Pioreactor software and hardware is heavily documented. Answers are easy to find, and
        the support is available on the community forums.
      </>
    ),
  },
  {
    title: 'Powered by Raspberry Pi',
    img: require('../../static/img/RPi-Logo-SCREEN.png').default,
    description: (
      <>
        Pioreactor sits on top of the awesome Raspberry Pi micro-computer. This provids a full
        linux environment to power your bioreactor.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
