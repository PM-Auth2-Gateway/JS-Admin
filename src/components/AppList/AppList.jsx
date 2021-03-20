import React from "react";
import {useRouteMatch} from 'react-router-dom';

import styles from './AppList.module.scss';

import CreateAppModal from "../CreateAppModal/CreateAppModal";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import AppPreview from "../AppPreview/AppPreview";

const AppList = () => {
  const {url} = useRouteMatch();

  return (
    <Container>
      <Row className='mb-5'>
        <Col>
          <h2>Applications</h2>
        </Col>
        <Col xs="auto">
          <CreateAppModal />
        </Col>
      </Row>
      <ListGroup variant={"flush"}>
        <ListGroup.Item className={styles.listItem}>
          <AppPreview url={`${url}/1`} name={"asd"}/>
        </ListGroup.Item>
        <ListGroup.Item className={styles.listItem}>
          <AppPreview url={`${url}/2`} name={"asdasfdgfh"}/>
        </ListGroup.Item>
      </ListGroup>

    </Container>
  )
}

export default AppList;
