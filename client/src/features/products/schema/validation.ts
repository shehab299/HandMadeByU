import * as yup from "yup";

export const validation = yup.object({
  name: yup
    .string()
    .required("Product name is required")
    .min(2, "Product name must be at least 2 characters")
    .max(100, "Product name can't exceed 100 characters"),

  price: yup
    .number()
    .typeError("Please enter product's the price")
    .required("Price is required")
    .positive("Price must be positive"),

  description: yup.string().required("Description is required"),

  quantity: yup
    .number()
    .typeError("Please enter product's available the quantity")
    .required("Quantity is required")
    .integer("Quantity must be a whole number")
    .min(0, "Quantity must be 0 or more"),

  image: yup
    .mixed<FileList>()
    .required("Image is required")

    .test(
      "fileList",
      "Please select an image",
      (value) => value instanceof FileList
    ),
});
