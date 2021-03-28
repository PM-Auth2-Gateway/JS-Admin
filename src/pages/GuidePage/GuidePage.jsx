import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import GoogleGuide from './GoogleGuide/GoogleGuide';
import FacebookGuide from './FacebookGuide/FacebookGuide';

const GuidePage = () => {
  return (
    <div>
      <Tab.Container defaultActiveKey='google'>
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
                <Nav.Link eventKey='google'>Google</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='fb'>Facebook</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='google'>
                <GoogleGuide />
              </Tab.Pane>
              <Tab.Pane eventKey='fb'>
                <FacebookGuide />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default GuidePage;
