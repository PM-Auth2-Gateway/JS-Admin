import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, Form } from 'react-bootstrap';

const AppSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
});

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const CreateAppModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = {
    name: '',
  };

  const onSubmit = (values) => {
    props.onSubmit(values);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button data-test={'open-modal'} variant='danger' onClick={handleShow}>
        Create Application
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Formik
          initialValues={initialValues}
          validationSchema={AppSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Create Application</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    as={Field}
                    name='name'
                    type='text'
                    placeholder='Enter name of app'
                    isInvalid={errors.name && touched.name}
                  />
                  {errors.name && touched.name ? (
                    <Form.Control.Feedback type='invalid'>
                      <ErrorMessage name='name' />
                    </Form.Control.Feedback>
                  ) : null}
                  <Form.Text muted>
                    You can change the application name later in the application
                    settings.
                  </Form.Text>
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  data-test={'close-modal'}
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
                  Create
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </React.Fragment>
  );
};

CreateAppModal.propTypes = propTypes;

export default CreateAppModal;
