import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
  dateOfBirth: Yup.date().required("Required").nullable(),
  gender: Yup.string().required("Required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  country: Yup.string().required("Required"),
});
