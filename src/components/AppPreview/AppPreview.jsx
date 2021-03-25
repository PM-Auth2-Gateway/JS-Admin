import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppPreview.module.scss';

import appIcon from '../../assets/app-icon.svg';

const AppPreview = ({ url, name }) => {
  return (
    <div className={styles.appPreview}>
      <Link to={url}>
        <img src={appIcon} className={styles.appIcon} alt='icon' />
        <span className={styles.appName}>{name}</span>
      </Link>
    </div>
  );
};

export default AppPreview;
