import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import EditSocialForm from '../../components/EditSocialForm/EditSocialForm';

import styles from './SingleSocialPage.module.scss';
import selector from './SingleSocialPage.selector';
import {
  loadCurrentSocial,
  removeCurrentSocial,
  updateCurrentSocial,
} from '../../ducks/socials/current';

const SingleSocialPage = () => {
  const dispatch = useDispatch();

  const { appId, socialId } = useParams();
  const social = useSelector(selector);

  useEffect(() => {
    dispatch(loadCurrentSocial(appId, socialId));

    return () => {
      dispatch(removeCurrentSocial());
    };
  }, [dispatch, appId, socialId]);

  const onEdit = (values) => {
    dispatch(updateCurrentSocial(appId, socialId, values));
  };

  return (
    <Container>
      <div className={styles.socialPreview}>
        <img src={null} className={styles.socialIcon} alt='icon' />
        <h2>
          {social.loading ? (
            <Spinner animation='border' />
          ) : (
            social.current.name
          )}
        </h2>
      </div>
      <Row className={classNames('justify-content-center', styles.form)}>
        <Col lg={6} md={8}>
          {social.loading ? (
            <Spinner animation='border' />
          ) : (
            <EditSocialForm initialValues={social.current} onSubmit={onEdit} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SingleSocialPage;
