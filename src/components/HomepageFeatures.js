import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'User Guide',
    Svg: require('../../static/img/optical_density.svg').default,
    link: "/user_guide/user_guide_intro",
    description: (
      <>
        For biologists, almost-biologists, reseachers, students, and those who want to use the Pioreactor to study microbiology.
      </>
    ),
  },
  {
    title: 'Developer Guide',
    Svg: require('../../static/img/automation.svg').default,
    link: "/developer_guide/developer_guide_intro",
    description: (
      <>
        For those interested in the Pioreactor customizations, API, plugin development, and hacking.
      </>
    ),
  },
  {
    title: 'Changelog',
    Svg: require('../../static/img/plugins.svg').default,
    link: "/changelog",
    description: (
      <>
        View the latest updates to the Pioreactor software.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  console.log(Svg)
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}><Svg className={styles.featureSvg} alt={title} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link} style={{textDecoration: "none", color: "inherit"}}>{title}</a></h3>
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
