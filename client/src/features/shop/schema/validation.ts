import * as yup from "yup";

const validation = yup.object({
  name: yup
    .string()
    .required("Shop name is required")
        .min(3, "Shop name must be at least 3 characters"),
    description: yup.string().required("Shop description is required").min(20, "Description must be at least 20 characters"),
});

export { validation };
