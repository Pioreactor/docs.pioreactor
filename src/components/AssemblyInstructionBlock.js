import React from 'react';
import clsx from 'clsx';
import styles from './AssemblyInstructionBlock.module.css';

import { useColorMode } from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';


export default function AssemblyInstructionBlock({children, title, images}) {

  const url = useLocation().pathname.split('#')[0];
  const [mainImage, setMainImage] = React.useState(images[0]);

  const imageSelect = (n) => (event) => {
    setMainImage(images[n])
  }

  const process = (value) => {
    return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
  }


  return (
    <div id={process(title)} style={{padding: "10px", margin: "20px 0px 60px 0px", display:"flex", flexWrap: "nowrap"}}>

      <div id="mainImage" style={{width: "55%", float: "left", marginRight: "10px"}}>
        <h2>{title}  <a href={url + "#" + process(title)}>#</a></h2>
        <img
          style={{maxHeight: 440}}
          src={require(`/static/img/${mainImage}`).default}
        />
        {images.length > 1  && 
		   <div id="thumbnails" style={{width: "100%"}}>
          {
            images.map((image, n) =>
            <button
              onClick={imageSelect(n)}
              key={n}
              className={clsx({[styles.thumbnail]: image !==  mainImage, [styles.highlightThumbnail]: image ===  mainImage})}
              >
              <img
                width={"100px"}
                src={require(`/static/img/${image}`).default}
                key={image}
              />
            </button>)
          }
			</div>
		}
      </div>
      <section style={{width: "44%", float: "left", marginTop: "40px"}}>
          {children}
      </section>

    </div>
  );
}

