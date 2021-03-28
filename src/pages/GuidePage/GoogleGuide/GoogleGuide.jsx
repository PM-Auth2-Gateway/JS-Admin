import React from 'react';
import { Table } from 'react-bootstrap';

const GoogleGuide = () => {
  return (
    <div>
      <h1>Connect Apps to Google</h1>
      <p>
        The Google social connection allows users to log in to your application
        using their Google profile.
      </p>
      <h3>Prerequisites</h3>
      <p>Before you begin:</p>
      <ul>
        <li>
          <a href='https://console.developers.google.com/' target='blank'>
            Sign up for a Google Developer account
          </a>
        </li>
        <li>
          <a href='https://support.google.com/googleapi/answer/6251787?ref_topic=7014522'>
            Create a Google Project
          </a>
        </li>
      </ul>
      <h3>Create Google credentials</h3>
      <p>
        Configure your OAuth consent screen and create credentials in the Google
        Developer Console using Google's Setting up OAuth 2.0 documentation.
        During this process, Google will generate a Client ID and Client Secret
        for your application; make note of these.
      </p>
      <p>
        While setting up your OAuth consent screen, use the following settings:
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
            <td>User Type </td>
            <td>
              Select <strong>External</strong>
            </td>
          </tr>
          <tr>
            <td>Application Type</td>
            <td>
              Select <strong>Public</strong>
            </td>
          </tr>
          <tr>
            <td>Authorized domains</td>
            <td>
              <code>net-api-hbyuu.ondigitalocean.app</code>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>While setting up your credentials, use the following settings:</p>
      <Table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value to Provide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Application Type</td>
            <td>Web application</td>
          </tr>
          <tr>
            <td>Authorized domains</td>
            <td>
              <code>https://net-api-hbyuu.ondigitalocean.app/auth/google</code>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Create and enable connection in PM Auth</h3>
      <p>
        Set up the Google social connection in PM Auth. Make sure you have the
        Client ID and the Client Secret generated.
      </p>
    </div>
  );
};

export default GoogleGuide;
