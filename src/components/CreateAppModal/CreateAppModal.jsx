import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CreateAppModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = () => {
    handleClose();
  };

  return (
    <React.Fragment>
      <Button data-test={'open-modal'} variant="danger" onClick={handleShow}>
        Create Application
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name of app" />
            <Form.Text className="text-muted">
              You can change the application name later in the application
              settings.
            </Form.Text>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            data-test={'close-modal'}
            variant="outline-secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            data-test={'submit-modal'}
            variant="primary"
            type="submit"
            onClick={submitForm}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CreateAppModal;
