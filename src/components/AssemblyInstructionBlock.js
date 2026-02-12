import React from 'react';
import clsx from 'clsx';
import styles from './AssemblyInstructionBlock.module.css';

import {useLocation} from '@docusaurus/router';


export default function AssemblyInstructionBlock({children, title, images}) {

  const url = useLocation().pathname.split('#')[0];
  const [mainImage, setMainImage] = React.useState(images[0]);
  const [isEnlarged, setIsEnlarged] = React.useState(false);

  React.useEffect(() => {
    if (!isEnlarged) {
      return;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsEnlarged(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isEnlarged]);

  const imageSelect = (n) => (event) => {
    const nextImage = images[n];
    if (nextImage === mainImage) {
      setIsEnlarged(true);
      return;
    }

    setMainImage(nextImage);
    setIsEnlarged(false);
  }

  const process = (value) => {
    return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
  }


  return (
    <div id={process(title)} style={{padding: "10px", margin: "20px 0px 60px 0px", display:"flex", flexWrap: "nowrap"}}>

      <div id="mainImage" style={{width: "55%", float: "left", marginRight: "10px"}}>
        <h2>{title}  <a href={url + "#" + process(title)}>#</a></h2>
        <img
          onClick={() => setIsEnlarged(true)}
          style={{
            height: 440,
            maxWidth: '100%',
            objectFit: 'contain',
            cursor: 'zoom-in',
          }}
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
      {isEnlarged && (
        <div className={styles.lightboxOverlay} onClick={() => setIsEnlarged(false)}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setIsEnlarged(false)}
            aria-label="Close enlarged image"
          >
            x
          </button>
          <img
            className={styles.lightboxImage}
            src={require(`/static/img/${mainImage}`).default}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
