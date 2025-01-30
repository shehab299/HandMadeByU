import * as yup from "yup";

const validation = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  age: yup
    .number()
    .typeError("Please enter your age")
    .positive("Please enter a valid age")
    .integer("Please enter a valid age")
    .required("Please enter your age"),
});

export { validation };
