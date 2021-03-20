import React from "react";
import classNames from "classnames";
import {Container, FormControl, FormGroup, FormLabel, Row, Col, FormText, Button} from "react-bootstrap";

import styles from "./SocialInfo.module.scss";
import socialIcon from "../../assets/google-avatar.png";

const SocialInfo = () => {
  return (
    <Container>
      <div className={styles.socialPreview}>
        <img src={socialIcon} className={styles.socialIcon} alt="icon"/>
        <h2>Social network name</h2>{/*TODO get from back*/}
      </div>
      <Row className={classNames("justify-content-center", styles.form)}>
        <Col lg={6} md={8}>
          {/*TODO get required field from back*/}
          <FormGroup>
            <FormLabel>Social Name</FormLabel>
            <FormControl type={"text"} readOnly defaultValue={"sadasdsadsad"}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Client ID</FormLabel>
            <FormControl type={"text"}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Client Secret</FormLabel>
            <FormControl type={"text"}/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Allowed Mobile Client IDs</FormLabel>
            <FormControl as={'textarea'} rows={3}/>
            <FormText className={'text-muted'}>You can specify multiple valid client IDs by comma-separating
              them</FormText>
          </FormGroup>

          <Button variant={"info"}>Update</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SocialInfo;
