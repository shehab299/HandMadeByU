import { useForm } from "react-hook-form";
import { Store, Image, FileImage } from "lucide-react";
import styled from "styled-components";

import InputField from "@components/InputField";
import Button from "@components/Button";
import FileUploadField from "@components/FileUploadField";
import SpinnerMini from "@components/SpinnerMini";

import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateShop } from "./hooks/useCreateShop";
import { validation } from "./schema/validation";

import { CreatedShop } from "@types";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8fd 0%, #f1f4f9 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`;

const FormCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2rem;
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

function CreateShopForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreatedShop>({
    resolver: yupResolver(validation),
    mode: "onTouched",
  });

  const { createShop, isPending } = useCreateShop();

  const logoFiles = watch("logo");
  const bannerFiles = watch("banner");

  const logoPreview = logoFiles?.[0] ? URL.createObjectURL(logoFiles[0]) : "";
  const bannerPreview = bannerFiles?.[0]
    ? URL.createObjectURL(bannerFiles[0])
    : "";

  async function onSubmit(data: CreatedShop) {
    createShop(data);
  }

  return (
    <Container>
      <FormCard>
        <Title>
          <Store color="var(--color-accent)" size={32} />
          Create Your Shop
        </Title>
        <Subtitle>
          Set up your shop's profile to start selling your products
        </Subtitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <InputField
              id="name"
              label="Shop Name"
              type="text"
              register={register}
              error={errors.name?.message}
              placeholder="Enter your shop name"
            />
          </FormGroup>

          <FormGroup>
            <FileUploadField
              id="logo"
              label="Shop Logo"
              register={register}
              preview={logoPreview}
              recommendedText="Recommended: 400x400px, Max size: 2MB"
              icon={<Image size={32} />}
            />
          </FormGroup>

          <FormGroup>
            <FileUploadField
              id="banner"
              label="Shop Banner"
              register={register}
              preview={bannerPreview}
              recommendedText="Recommended: 1200x400px, Max size: 5MB"
              icon={<FileImage size={32} />}
            />
          </FormGroup>

          <FormGroup>
            <InputField
              id="description"
              label="Shop Description"
              type="textArea"
              register={register}
              error={errors.description?.message}
              placeholder="Describe what your shop offers..."
            />
          </FormGroup>
          <Button $variety="primary" disabled={isSubmitting}>
            {isPending ? <SpinnerMini /> : "Create Shop"}
          </Button>
        </form>
      </FormCard>
    </Container>
  );
}

export default CreateShopForm;
