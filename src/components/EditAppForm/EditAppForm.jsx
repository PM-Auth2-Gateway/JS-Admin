import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const AppSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
});

const EditAppForm = ({ initialValues, onEdit }) => {
  const onSubmit = (values) => {
    onEdit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AppSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name='name'
              type='text'
              placeholder='Enter name of app'
              isInvalid={errors.name && touched.name}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <Form.Control.Feedback type='invalid'>
                <ErrorMessage name='name' />
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Label>App ID</Form.Label>
            <Form.Control
              name='id'
              type='text'
              readOnly
              defaultValue={values.id}
            />
          </Form.Group>

          <Button variant={'info'} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditAppForm;
