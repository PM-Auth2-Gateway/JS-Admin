import React from 'react';
import { Table } from 'react-bootstrap';

const FacebookGuide = () => {
  return (
    <div>
      <h1>Connect Apps to Facebook</h1>
      <p>
        The Facebook social connection allows users to log in to your
        application using their Facebook profile.
      </p>
      <h3>Prerequisites</h3>
      <p>
        Before you begin,{' '}
        <a href='https://developers.facebook.com/' target='blank'>
          sign up for a Facebook Developer account
        </a>
        .
      </p>
      <h3>Set up app in Facebook</h3>
      <p>
        Create an app in the{' '}
        <a href='https://developers.facebook.com/' target='blank'>
          Facebook Developer portal
        </a>
        , and add Facebook Login to the app as a Product. During this process,
        Facebook will generate a App ID and App Secret for your application;
        make note of these.
      </p>
      <p>While setting up your app, use the following settings:</p>
      <Table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value to Provide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>How are you using your app?</td>
            <td>Select For everything else.</td>
          </tr>
          <tr>
            <td>Permissions and Features</td>
            <td>
              Select the permissions your app will require. Only the{' '}
              <code>default</code> and <code>email</code> permissions do not
              require app review by Facebook.
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        While setting up the Facebook Login product, use the following settings
      </p>
      <Table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value to Provide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client OAuth Settings</td>
            <td>Enable Web OAuth Login (web applications)</td>
          </tr>
          <tr>
            <td>Valid OAuth Redirect URIs</td>
            <td>
              <code>
                https://net-api-hbyuu.ondigitalocean.app/auth/facebook
              </code>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Create and enable connection in PM Auth</h3>
      <p>
        Set up the Facebook social connection in PM Auth. Make sure you have the
        generated App ID and the App Secret.
      </p>
    </div>
  );
};

export default FacebookGuide;
