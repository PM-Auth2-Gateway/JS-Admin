import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import classNames from 'classnames';

import { androidCode2, androidCode6 } from './code';

import styles from './DocsPage.module.scss';

const DocsPage = () => {
  return (
    <div className={classNames('pb-4', 'pt-2', styles.container)}>
      <Tab.Container defaultActiveKey='iOS'>
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='iOS'>iOS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='android'>Android</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='iOS'>
                <p className={styles.paragraph}>
                  <h1>iOS SDK</h1>
                  Flexible Swift Package Manager for Google/Facebook
                  Authorization. We create this SPM without Google and Facebook
                  SDK.
                </p>
                <h2>Installation</h2>
                <p className={styles.paragraph}>
                  Insert url of this SPM in your XCode Project with{' '}
                  <code className={styles.codePath}>
                    Open → Swift Package → Add Package Dependency
                  </code>
                  . Import this library to your <code>ViewController</code>{' '}
                  with:
                  <SyntaxHighlighter language='swift'>
                    import AuthPM
                  </SyntaxHighlighter>
                </p>
                <p className={styles.paragraph}>
                  Then you should initiate an instance:
                  <SyntaxHighlighter language='swift'>
                    let authPM = AuthPM(appId: 'YOUR_APP_ID', deepLinkingScheme:
                    'YOUR_URL_SCHEME')
                  </SyntaxHighlighter>
                </p>
                <p className={styles.paragraph}>
                  After all of this operations call this function in your
                  ViewController <code>viewDidLoad</code>.
                  <SyntaxHighlighter language='swift'>
                    AuthPM.getAuthButton()
                  </SyntaxHighlighter>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey='android'>
                <div className={styles.paragraph}>
                  <h1>PMAuth Login for Android</h1>
                  The PMAuth library for Android allows people to sign into your
                  app with various social networks. When people log into your
                  app with social networks they can grant permissions to your
                  app so you can retrieve information from users profile. For an
                  example project that illustrates how to integrate Facebook
                  Login into an Android app, see the PMAuthSampleLogin on{' '}
                  <a
                    href='https://github.com/PM-Auth2-Gateway/Android-SDK'
                    target='blank'
                  >
                    GitHub.
                  </a>{' '}
                  Follow the steps below to add PMAuth Login to your app.
                </div>
                <div className={styles.paragraph}>
                  <h3>Integrate the PMAuth library</h3>
                  1. In your project, open{' '}
                  <code className={styles.codePath}>
                    Files {'>'} New {'>'} Import Module {'>'} Select source
                    directory with dowloaded PMAuth library {'>'} Check “Import”
                    and set the Module Name for library {'>'} Finish.
                  </code>
                  <p>
                    2. In your project, open{' '}
                    <code className={styles.codePath}>
                      your_app {'>'} Gradle Scripts {'>'} build.gradle (Module:
                      app) and add the following
                    </code>{' '}
                    implementation statement to the{' '}
                    <code>{'dependencies{}'}</code> section
                  </p>
                  <SyntaxHighlighter language='kotlin'>
                    implementation project(path: ':module-name')
                  </SyntaxHighlighter>
                  <p>3. Build your project.</p>
                </div>
                <div className={styles.paragraph}>
                  <h3>Edit Your Manifest</h3>
                  <p>
                    1. Open the{' '}
                    <code className={styles.codePath}>
                      /app/manifest/AndroidManifest.xml
                    </code>{' '}
                    file.
                  </p>
                  <p>
                    2. Add the following <code>intent-filter</code> element for
                    Chrome Custom Tabs inside your <code>application</code>{' '}
                    element:
                  </p>
                  <SyntaxHighlighter language='xml'>
                    {androidCode2}
                  </SyntaxHighlighter>
                  <p>
                    3. Set <code>launchMode</code> for your login activity:
                  </p>
                  <SyntaxHighlighter language='kotlin'>
                    android:launchMode="singleTop"
                  </SyntaxHighlighter>
                </div>
                <div className={styles.paragraph}>
                  <h3>3. Setup PMOptions</h3>
                  <p>
                    Now create PmOptions instance in your Activity or Fragment
                    to configure library.
                  </p>
                  <SyntaxHighlighter language='kotlin'>
                    {`val options = PmLogin.PmOptions(
    appId = "1", redirectUrl = "pmlogintest://test", requiredFields = listOf(
        ProfileContract.ID,
        ProfileContract.EMAIL,
    )
)`}
                  </SyntaxHighlighter>
                  <p>
                    <code>RequiredFields</code> you can request are listed in{' '}
                    <code>ProfileContract</code>
                  </p>
                </div>
                <div className={styles.paragraph}>
                  <h3>4. Initiate PmClient</h3>
                  <p>Initiate PmClient in your Activity or Fragment.</p>
                  <SyntaxHighlighter language='kotlin'>
                    {`val client = PmLogin.PmClient(options)`}
                  </SyntaxHighlighter>
                  <h3>5. Register a Callback</h3>
                  <p>
                    Now observe on a <code>client.loginResult</code> to handle
                    login responses.
                  </p>
                  <SyntaxHighlighter language='kotlin'>
                    {`client.loginResult.observe(this) { result ->
    Toast.makeText(this, "I've got a result \${result}", Toast.LENGTH_SHORT).show()
}`}
                  </SyntaxHighlighter>
                </div>
                <div className={styles.paragraph}>
                  <h3>6. Add the Login Button</h3>
                  <p>
                    The simplest way to add PMAuth login to your app is to add{' '}
                    <code>PMAuthButton</code>. When someone clicks on the
                    button, the login is initiated. To add the Login button,
                    first add it to your layout XML file:
                  </p>
                  <SyntaxHighlighter language='xml'>
                    {androidCode6}
                  </SyntaxHighlighter>
                </div>
                <div className={styles.paragraph}>
                  <h3>7. Register a Listener</h3>
                  <p>
                    Set a click listener to open a Pop-Up with login through
                    social networks. It is recommended to use{' '}
                    <code>onSingleClickListener</code>, provided by library.
                  </p>
                  <SyntaxHighlighter language='kotlin'>
                    {`binding.btnPmlogin.onSingleClickListener\nclient.startLogin(this)`}
                  </SyntaxHighlighter>
                </div>
                <h3>
                  Congrats, you've added PMAuth Login to your Android app!
                </h3>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default DocsPage;
