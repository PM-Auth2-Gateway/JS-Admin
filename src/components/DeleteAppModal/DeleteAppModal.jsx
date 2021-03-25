import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteAppModal = ({ onDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (values) => {
    onDelete();
    handleClose();
  };

  return (
    <React.Fragment>
      <Button data-test={'open-modal'} variant='danger' onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this application?
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
            onClick={onSubmit}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteAppModal;
