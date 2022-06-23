import React from 'react';
import clsx from 'clsx';
import styles from './AssemblyInstructionBlock.module.css';

import { useColorMode } from '@docusaurus/theme-common';

export default function AssemblyInstructionBlock({children, title, images}) {

  const [mainImage, setMainImage] = React.useState(images[0]);

  const imageSelect = (n) => (event) => {
    setMainImage(images[n])
  }

  return (
    <div style={{padding: "10px", margin: "60px 0px 40px 0px", display:"flex", flexWrap: "nowrap"}}>

      <div id="mainImage" style={{width: "55%", float: "left", marginRight: "10px"}}>
        <h2> {title} </h2>
        <img
          maxHeight={240}
          src={require(`/static/img/user-guide/${mainImage}`).default}
        />
        <div id="thumbnails" style={{width: "100%"}}>
          {
            images.map((image, n) =>
            <button
              onClick={imageSelect(n)}
              key={n}
              className={clsx({[styles.highlightThumbnail]: image ===  mainImage, [styles.thumbnail]: true})}
              >
              <img
                width={100} height={50}
                src={require(`/static/img/user-guide/${image}`).default}
                key={image}
              />
            </button>)
          }
        </div>
      </div>
      <section style={{width: "44%", float: "left", marginTop: "40px"}}>
          {children}
      </section>

    </div>
  );
}