import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from '../DocsPage.module.scss';

const code1 = `const el = document.getElementById('container');
const callback = (data) => console.log(data);

new AuthPM({
  appId: "YOUR_APP_ID",
  target: el,
  callback: callback
})`;

const code2 = `const auth = new AuthPM({
  // your app id that you get when registering the app in the admin panel, app id is unique
  appId: "YOUR_APP_ID", 
  // a place where the widget will be inserted, can be passed as a query selector or DOM element
  target: el, 
  // a function that will be called when the user profile is received
  callback: callback 
  customization: {
    direction: "row/column"
  }
});`;

const WebDoc = () => {
  return (
    <>
      <div className={styles.paragraph}>
        <h3>Getting started</h3>
        <p>
          Link <code>library.js</code> in your HTML :
        </p>
        <SyntaxHighlighter language='javascript'>
          {`<script src="https://js-widget-tp7mc.ondigitalocean.app/library.js"></script>`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.paragraph}>
        <h3>Usage</h3>
        <SyntaxHighlighter language='html'>
          {`<div id="container"><div>`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language='javascript'>{code1}</SyntaxHighlighter>
      </div>
      <div className={styles.paragraph}>
        <h3>Options</h3>
        <SyntaxHighlighter language='javascript'>{code2}</SyntaxHighlighter>
        <div className={styles.paragraph}>
          <h4>
            <code>callback</code> option
          </h4>
        </div>
        <p>
          This function should take an object with user information as the first
          parameter, and an object with errors as the second If the profile is
          successfully received, the function will be called with parameters
        </p>
        <SyntaxHighlighter language='javascript'>
          callback(userProfile, null);
        </SyntaxHighlighter>
        <div>
          The userProfile object includes such fields
          <ul>
            <li>email</li>
            <li>firstName</li>
            <li>id</li>
            <li>isVerifiedEmail</li>
            <li>lastName</li>
            <li>locale</li>
            <li>name</li>
            <li>photo</li>
          </ul>
          <div>
            If an error occurred while getting the profile, then function will
            be called with the parameters:
          </div>
          <SyntaxHighlighter language='javascript'>
            callback(null, errors);
          </SyntaxHighlighter>
          <div>
            The error object includes such fields
            <ul>
              <li>error</li>
              <li>errorCode</li>
              <li>error_description</li>
            </ul>
          </div>
          <div>
            <div className={styles.paragraph}>
              <h4>
                <code>customization</code> option
              </h4>
            </div>
            <p>Using this object, you can customize the display of buttons</p>
            <ul>
              <li>
                <strong>
                  <code>direction</code> property
                </strong>
                <br /> This property specifies how social buttons will be
                displayed Possible options:{' '}
                <code>row / row-reverse / column / column-reverse</code>
                <br />
                Default value: <code>row</code>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Congrats, you've added PMAuth Widget to your Website!</h3>
    </>
  );
};

export default WebDoc;
