import React from "react";
import {useRouteMatch} from 'react-router-dom';
import classNames from "classnames";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

import CreateAppModal from "../CreateAppModal/CreateAppModal";
import AppPreview from "../AppPreview/AppPreview";

import styles from './AppList.module.scss';


const AppList = () => {
  const {url} = useRouteMatch();

  return (
    <Container>
      <Row className={classNames('mb-5', "align-items-center")}>
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
