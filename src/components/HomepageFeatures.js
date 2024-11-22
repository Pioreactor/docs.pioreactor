import React from 'react';
import clsx from 'clsx';

import styles from './HomepageFeatures.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: 'User Guide',
    Svg: require('@site/static/img/misc/undraw_scientist_ft0o.svg').default,
    link: "/user-guide/introduction",
    description: (
      <>
        For biologists, almost-biologists, reseachers, students, and those who want to use the Pioreactor to study microbiology.
      </>
    ),
  },
  {
    title: 'Developer Guide',
    Svg: require('@site/static/img/misc/undraw_developer_activity_re_39tg.svg').default,
    link: "/developer-guide/introduction",
    description: (
      <>
        For those interested in the Pioreactor customizations, API, plugin development, and hacking.
      </>
    ),
  },
  {
    title: 'Experiments',
    Svg: require('@site/static/img/misc/undraw_professor_re_mj1s.svg').default,
    link: "/experiments/introduction",
    description: (
      <>
        Implement Pioreactor-based experiments, from classrooms to research-level.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg
           className={styles.featureSvg}
           stroke={useColorMode().colorMode === "dark" ? "white" : "#5332CA"}
           fill={useColorMode().colorMode === "dark" ? "white" : "#5332CA"}
           alt={title} />
           </a>
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
