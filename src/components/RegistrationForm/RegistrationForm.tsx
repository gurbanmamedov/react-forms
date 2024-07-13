import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { initialValues, formFields } from './FormFields';
import { validationSchema } from './validationSchema';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date | null;
  gender: string;
  newsletter: boolean;
  terms: boolean;
  country: string;
  avatar: File | null;
}

const RegistrationForm: React.FC = () => {
  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            {formFields(setFieldValue, values)}
            <div className="form-actions">
              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
