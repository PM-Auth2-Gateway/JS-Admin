import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button, Form, Modal } from 'react-bootstrap';

import {
  createCurrentSocial,
  loadCurrentSocial,
  updateCurrentSocial,
} from '../../ducks/socials/current';
import { useAppContext } from '../../contexts/App.context';

import emptySocial from '../../data/empty_social.json';
import selector from './SocialModal.selector';

const SocialSchema = Yup.object().shape({
  clientId: Yup.string().required('Client ID is required'),
  secretKey: Yup.string().required('Secret key is required'),
  scope: Yup.string().required('Scope is required'),
});

const SocialModal = (props) => {
  const dispatch = useDispatch();

  const { appId } = useAppContext();
  const social = useSelector(selector);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = props.mode === 'update' ? social.current : emptySocial;

  useEffect(() => {
    if (props.mode === 'update') dispatch(loadCurrentSocial(appId, props.id));

    return () => {};
  }, [dispatch, appId, props.id, props.mode]);

  const create = (values) => {
    dispatch(createCurrentSocial(appId, props.id, values));
  };

  const update = (values) => {
    dispatch(updateCurrentSocial(appId, props.id, values));
  };

  const onSubmit = (values) => {
    console.log(values);
    props.mode === 'update' ? update(values) : create(values);

    handleClose();
  };

  return (
    <React.Fragment>
      <Button data-test={'open-modal'} variant='primary' onClick={handleShow}>
        {props.mode === 'create' ? 'Create' : 'Update'}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Formik
          initialValues={initialValues}
          validationSchema={SocialSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form>
              <Modal.Header closeButton>
                <Modal.Title>
                  {props.mode === 'create' ? 'Create' : 'Update'} Social
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Client ID</Form.Label>
                  <Form.Control
                    as={Field}
                    name='clientId'
                    type='text'
                    placeholder='Enter client ID of app'
                    isInvalid={errors.clientId && touched.clientId}
                  />
                  {errors.clientId && touched.clientId ? (
                    <Form.Control.Feedback type='invalid'>
                      <ErrorMessage name='clientId' />
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Client Secret</Form.Label>
                  <Form.Control
                    as={Field}
                    name='secretKey'
                    type='text'
                    placeholder='Enter secret key of app'
                    isInvalid={errors.secretKey && touched.secretKey}
                  />
                  {errors.secretKey && touched.secretKey ? (
                    <Form.Control.Feedback type='invalid'>
                      <ErrorMessage name='secretKey' />
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Scope</Form.Label>
                  <Form.Control
                    as={Field}
                    type='textarea'
                    name='scope'
                    placeholder='Enter scope of app'
                    isInvalid={errors.scope && touched.scope}
                    rows={3}
                  />
                  {errors.scope && touched.scope ? (
                    <Form.Control.Feedback type='invalid'>
                      <ErrorMessage name='scope' />
                    </Form.Control.Feedback>
                  ) : null}
                  <Form.Text className={'text-muted'}>
                    You can specify multiple valid client IDs by
                    comma-separating them
                  </Form.Text>
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  data-test={'close-modal'}
                  type='button'
                  variant='outline-secondary'
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  data-test={'submit-modal'}
                  type='button'
                  variant='primary'
                  onClick={handleSubmit}
                >
                  {props.mode === 'create' ? 'Create' : 'Update'}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </React.Fragment>
  );
};

export default SocialModal;
