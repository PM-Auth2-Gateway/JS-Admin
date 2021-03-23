import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppPreview.module.scss';

import appIcon from '../../assets/app-icon.svg';

const AppPreview = ({ url, name }) => {
  return (
    <div className={styles.appPreview}>
      <Link to={url}>
        <img src={appIcon} className={styles.appIcon} alt='icon' />
      </Link>
      <span className={styles.appName}>
        <Link to={url}>{name}</Link>
      </span>
    </div>
  );
};

export default AppPreview;
