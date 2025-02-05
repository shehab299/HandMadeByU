import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Package, Image } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "@components/InputField";
import FileUploadField from "@components/FileUploadField";
import Button from "@components/Button";
import FormTemplate, { FormGroup } from "@components/FormTemplate";

import { validation } from "./schema/validation";
import { useCreateProduct } from "./hooks/useCreateProduct";

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export type ProductFormData = {
  name: string;
  price: number;
  description: string;
  quantity: number;
  image: FileList;
};

type AddProductFormProps = {
  type?: "modal";
  onConfirm?: () => void;
  onClose?: () => void;
};

function AddProductForm({ onConfirm, onClose, type }: AddProductFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: yupResolver(validation),
    mode: "onTouched",
  });

  console.log(type);

  const { createProduct } = useCreateProduct();

  const imageFiles = watch("image");
  const imagePreview = imageFiles?.[0]
    ? URL.createObjectURL(imageFiles[0])
    : "";

  async function onSubmit(data: ProductFormData) {
    const image = data.image[0];
    createProduct({
      name: data.name,
      price: Number(data.price),
      description: data.description,
      quantity: Number(data.quantity),
      image,
    });

    onConfirm?.();
    onClose?.();
  }

  return (
    <FormTemplate
      title="Add New Product"
      subtitle="Fill in the details to add a new product to your shop"
      icon={<Package size={24} />}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <InputField
          type="text"
          label="name"
          register={register}
          id="name"
          placeholder="Enter product name"
          error={errors?.name?.message}
        />
      </FormGroup>

      <FormGroup>
        <InputField
          type="number"
          label="price"
          register={register}
          id="price"
          step="0.01"
          placeholder="0.00"
          error={errors?.price?.message}
        />
      </FormGroup>

      <FormGroup>
        <InputField
          type="number"
          label="quantity"
          register={register}
          id="quantity"
          placeholder="Enter available quantity"
          error={errors?.quantity?.message}
        />
      </FormGroup>

      <FormGroup>
        <InputField
          type="textArea"
          label="description"
          register={register}
          id="description"
          placeholder="Describe your product..."
          error={errors?.description?.message}
        />
      </FormGroup>

      <FormGroup>
        <FileUploadField
          id="image"
          label="Product Image"
          register={register}
          preview={imagePreview}
          recommendedText="Click to upload product image"
          icon={<Image size={32} />}
        />
      </FormGroup>

      <Buttons>
        <Button $variety="primary" $size="small" disabled={isSubmitting}>
          {isSubmitting ? "Adding Product..." : "Add Product"}
        </Button>
        <Button $variety="secondary" type="button" onClick={onClose}>
          Cancel
        </Button>
      </Buttons>
    </FormTemplate>
  );
}

export default AddProductForm;
