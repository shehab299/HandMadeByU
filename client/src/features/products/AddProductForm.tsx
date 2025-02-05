import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Package, Image } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateProduct } from "./hooks/useCreateProduct";
import { validation } from "./schema/validation";
import InputField from "@components/InputField";
import FileUploadField from "@components/FileUploadField";
import Button from "@components/Button";

const FormCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

// const Button = styled.button`
//   background: #4a90e2;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   width: 100%;
//   transition: background-color 0.2s;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;

//   &:hover {
//     background: #357abd;
//   }

//   &:disabled {
//     background: #ccc;
//     cursor: not-allowed;
//   }
// `;

interface FormInputs {
  name: string;
  price: number;
  description: string;
  quantity: number;
  image: FileList;
}

interface AddProductFormProps {
  shopId: string;
  onSuccess: () => void;
  onCancel?: () => void;
}

interface FormInputs {
  name: string;
  price: number;
  description: string;
  quantity: number;
  image: FileList;
}

interface AddProductFormProps {
  shopId: string;
  onSuccess: () => void;
  onCancel?: () => void;
}

export function AddProductForm({ onSuccess, onCancel }: AddProductFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: yupResolver(validation),
    mode: "onTouched",
  });

  const { createProduct } = useCreateProduct();

  const imageFiles = watch("image");
  const imagePreview = imageFiles?.[0]
    ? URL.createObjectURL(imageFiles[0])
    : "";

  const onSubmit = async (data: FormInputs) => {
    const imageUrl = URL.createObjectURL(data.image[0]);
    const formData = {
      name: data.name,
      price: Number(data.price),
      description: data.description,
      quantity: Number(data.quantity),
      image: imageUrl,
    };

    createProduct(formData, {
      onSettled: () => {
        onSuccess();
      },
    });
  };

  return (
    <FormCard>
      <Title>
        <Package size={24} />
        Add New Product
      </Title>
      <Subtitle>Fill in the details to add a new product to your shop</Subtitle>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button $variety="primary" $size="small" disabled={isSubmitting}>
            {isSubmitting ? "Adding Product..." : "Add Product"}
          </Button>
          {onCancel && (
            <Button
              $variety="secondary"
              type="button"
              onClick={onCancel}
              style={{ background: "#f5f7f9", color: "#1a1a1a" }}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </FormCard>
  );
}
