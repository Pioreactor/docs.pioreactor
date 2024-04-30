// src/components/Card.jsx
import React from 'react';
import styles from './Card.module.css'; // Import the corresponding CSS
import Link from '@docusaurus/Link'; // Import Link component for internal navigation


const Card = ({ imageUrl, headerText, linkUrl, isNew }) => (
  <Link to={linkUrl} className={styles.cardLink}>
    <div className={styles.card}>
      {isNew && <div className={styles.newLabel}>✨New</div>}
      <img src={require(`/static/img/${imageUrl}`).default} alt={headerText} className={styles.cardImage} />
      <h3 className={styles.cardHeader}>{headerText}</h3>
    </div>
 </Link>
);

export default Card;