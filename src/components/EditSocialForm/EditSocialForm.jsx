import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const SocialSchema = Yup.object().shape({
  clientId: Yup.string().required('Name is required'),
  secretKey: Yup.string().required('Name is required'),
});

const EditSocialForm = (props) => {
  const onSubmit = (values) => {
    props.onEdit(values);
  };

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={SocialSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form>
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
            <Form.Control as={'textarea'} rows={3} />
            <Form.Text className={'text-muted'}>
              You can specify multiple valid client IDs by comma-separating them
            </Form.Text>
          </Form.Group>

          <Button variant={'info'}>Update</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditSocialForm;
