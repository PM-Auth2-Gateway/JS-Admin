import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import IOSDoc from './IOSDoc/IOSDoc';
import AndroidDoc from './AndroidDoc/AndroidDoc';

import styles from './DocsPage.module.scss';
import WebDoc from './WebDoc/WebDoc';

const DocsPage = () => {
  return (
    <div className={classNames('pb-4', 'pt-2', styles.container)}>
      <Tab.Container defaultActiveKey='web'>
        <Row>
          <Col sm={3}>
            <Nav
              variant='pills'
              className={classNames(
                'flex-column',
                'mb-4',
                'pt-2',
                'sticky-top'
              )}
            >
              <Nav.Item>
                <Nav.Link eventKey='web'>Web Widget</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='iOS'>iOS SDK</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='android'>Android SDK</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='web'>
                <WebDoc />
              </Tab.Pane>
              <Tab.Pane eventKey='iOS'>
                <IOSDoc />
              </Tab.Pane>
              <Tab.Pane eventKey='android'>
                <AndroidDoc />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default DocsPage;
