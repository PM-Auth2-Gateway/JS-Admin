import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button, Form, Modal } from 'react-bootstrap';

import {
  createCurrentSocial,
  loadCurrentSocial,
  removeCurrentSocial,
  updateCurrentSocial,
} from '../../ducks/socials/current';
import { useAppContext } from '../../contexts/App.context';

import selector from './SocialModal.selector';
import { loadAllSocials } from '../../ducks/socials/all';

const SocialSchema = Yup.object().shape({
  client_id: Yup.string().required('Client ID is required'),
  secret_key: Yup.string().required('Secret key is required'),
  scope: Yup.string().required('Scope is required'),
});

const SocialModal = (props) => {
  const dispatch = useDispatch();

  const { appId } = useAppContext();
  const social = useSelector(selector);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    dispatch(removeCurrentSocial());
    setShow(false);
  };

  const handleShow = async () => {
    if (props.mode === 'update')
      await dispatch(loadCurrentSocial(appId, props.id));
    setShow(true);
  };

  const initialValues =
    props.mode === 'update'
      ? social.current
      : {
          client_id: '',
          secret_key: '',
          scope: '',
        };

  const create = async (values) => {
    await dispatch(createCurrentSocial(appId, props.id, values));
  };

  const update = async (values) => {
    await dispatch(updateCurrentSocial(appId, props.id, values));
  };

  const onSubmit = async (values) => {
    props.mode === 'update' ? await update(values) : await create(values);
    await dispatch(loadAllSocials(appId));

    handleClose();
  };

  return (
    <React.Fragment>
      <Button data-test={'open-modal'} variant='primary' onClick={handleShow}>
        {props.mode === 'create' ? 'Add' : 'Update'}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Formik
          initialValues={initialValues}
          validationSchema={SocialSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {props.mode === 'create' ? 'Add' : 'Update'} Social
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Client ID</Form.Label>
                  <Form.Control
                    as={Field}
                    name='client_id'
                    type='text'
                    placeholder='Enter client ID of app'
                    isInvalid={errors.client_id && touched.client_id}
                  />
                  {errors.client_id && touched.client_id ? (
                    <Form.Control.Feedback type='invalid'>
                      <ErrorMessage name='client_id' />
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Client Secret</Form.Label>
                  <Form.Control
                    as={Field}
                    name='secret_key'
                    type='text'
                    placeholder='Enter secret key of app'
                    isInvalid={errors.secret_key && touched.secret_key}
                  />
                  {errors.secret_key && touched.secret_key ? (
                    <Form.Control.Feedback type='invalid'>
                      <ErrorMessage name='secret_key' />
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
                    You can specify multiple scopes by space them
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
                  variant='primary'
                  type='submit'
                >
                  {props.mode === 'create' ? 'Add' : 'Update'}
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
