import React from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormFieldsProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  values: {
    dateOfBirth: Date | null;
  };
}

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: null,
  gender: "",
  newsletter: false,
  terms: false,
  country: "",
  avatar: null,
};

export const formFields = (
  setFieldValue: FormFieldsProps["setFieldValue"],
  values: FormFieldsProps["values"]
) => (
  <>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        type="text"
        id="firstName"
        name="firstName"
        className="form-control"
      />
      <ErrorMessage
        name="firstName"
        component="div"
        className="error-message"
      />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field
        type="text"
        id="lastName"
        name="lastName"
        className="form-control"
      />
      <ErrorMessage name="lastName" component="div" className="error-message" />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field type="email" id="email" name="email" className="form-control" />
      <ErrorMessage name="email" component="div" className="error-message" />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <Field
        type="password"
        id="password"
        name="password"
        className="form-control"
      />
      <ErrorMessage name="password" component="div" className="error-message" />
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <Field
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        className="form-control"
      />
      <ErrorMessage
        name="confirmPassword"
        component="div"
        className="error-message"
      />
    </div>

    <div className="form-group">
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <DatePicker
        selected={values.dateOfBirth}
        dateFormat="yyyy-MM-dd"
        className="form-control"
        name="dateOfBirth"
        onChange={(date) => setFieldValue("dateOfBirth", date)}
      />
      <ErrorMessage
        name="dateOfBirth"
        component="div"
        className="error-message"
      />
    </div>

    <div className="form-group">
      <label>Gender</label>
      <div
        role="group"
        aria-labelledby="my-radio-group"
        className="radio-group"
      >
        <label>
          <Field type="radio" name="gender" value="Male" />
          Male
        </label>
        <label>
          <Field type="radio" name="gender" value="Female" />
          Female
        </label>
      </div>
      <ErrorMessage name="gender" component="div" className="error-message" />
    </div>

    <div className="form-group">
      <label>
        <Field type="checkbox" name="newsletter" />
        Subscribe to newsletter
      </label>
    </div>

    <div className="form-group">
      <label>
        <Field type="checkbox" name="terms" />I accept the terms and conditions
      </label>
      <ErrorMessage name="terms" component="div" className="error-message" />
    </div>

    <div className="form-group">
      <label htmlFor="country">Country</label>
      <Field as="select" name="country" className="form-control">
        <option value="" label="Select your country" />
        <option value="AZ" label="Azerbaijan" />
        <option value="RU" label="Russia" />
        <option value="BY" label="Belarus" />
      </Field>
      <ErrorMessage name="country" component="div" className="error-message" />
    </div>

    <div className="form-group">
      <label htmlFor="avatar">Upload Avatar</label>
      <input
        id="avatar"
        name="avatar"
        type="file"
        className="form-control"
        onChange={(event) => {
          setFieldValue("avatar", event.currentTarget.files[0]);
        }}
      />
    </div>
  </>
);
