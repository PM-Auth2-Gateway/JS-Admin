import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AppSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
});

const EditAppForm = ({ initialValues, onEdit }) => {
  const onSubmit = (values) => {
    onEdit(values);

    toast('Application info updated successfully');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AppSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form>
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
          </Form.Group>
          <Form.Group>
            <Form.Label>App ID</Form.Label>
            <Form.Control as={Field} name='id' type='text' readOnly />
          </Form.Group>

          <Button type='button' variant={'info'} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditAppForm;
