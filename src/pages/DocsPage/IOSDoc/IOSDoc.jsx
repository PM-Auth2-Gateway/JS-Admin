import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import styles from '../DocsPage.module.scss';

const IOSDoc = () => {
  return (
    <>
      <div className={styles.paragraph}>
        <h1>iOS SDK</h1>
        Flexible Swift Package Manager for Google/Facebook Authorization. We
        create this SPM without Google and Facebook SDK.
      </div>
      <h3>Installation</h3>
      <div className={styles.paragraph}>
        Insert url of this SPM in your XCode Project with{' '}
        <code className={styles.codePath}>
          Open → Swift Package → Add Package Dependency
        </code>
        . Import this library to your <code>ViewController</code> with:
        <SyntaxHighlighter language='swift'>import AuthPM</SyntaxHighlighter>
      </div>
      <div className={styles.paragraph}>
        Then you should initiate an instance:
        <SyntaxHighlighter language='swift'>
          let authPM = AuthPM(appId: 'YOUR_APP_ID', deepLinkingScheme:
          'YOUR_URL_SCHEME')
        </SyntaxHighlighter>
      </div>
      <div className={styles.paragraph}>
        After all of this operations call this function in your ViewController{' '}
        <code>viewDidLoad</code>.
        <SyntaxHighlighter language='swift'>
          AuthPM.getAuthButton()
        </SyntaxHighlighter>
      </div>
      <div className={styles.paragraph}>
        <h3>Details</h3>
        This implementation uses <code>ASWebAuthenticationSession</code> to
        securely show a web view pointing to the Facebook and Google.
      </div>
      <div className={styles.paragraph}>
        <h3>Dependencies</h3>
        <p>
          <a href='https://github.com/gr-yarik/PMNetworking' target='blank'>
            PMNetworking
          </a>{' '}
          — unique Networking Library (Swift Package)
        </p>
        <p>XCode 12.4</p>
        <p>Swift 5.4</p>
      </div>
      <h3>Congrats, you've added PMAuth Login to your iOS app!</h3>
    </>
  );
};

export default IOSDoc;
