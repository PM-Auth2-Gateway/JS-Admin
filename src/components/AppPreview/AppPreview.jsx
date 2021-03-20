import React from "react";
import {Link} from "react-router-dom";

import appIcon from "../../assets/app-icon.svg";

import styles from "./AppPreview.module.scss";

const AppPreview = ({url, name}) => {
  return (
    <div className={styles.appPreview}>
      <Link to={url}>
        <img src={appIcon} className={styles.appIcon} alt="icon"/>
      </Link>
      <span className={styles.appName}>
        <Link to={url}>{name}</Link>
      </span>
    </div>
  )
}

export default AppPreview;
