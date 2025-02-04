import styled from "styled-components";
import { AlertCircle } from "lucide-react";
import { UseFormRegister } from "react-hook-form";
import { Label } from "./InputField";

const FileUploadArea = styled.div`
  border: 2px dashed #e1e1e1;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #4a90e2;
  }
`;

const UploadIcon = styled.div`
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  color: #666;
  margin: 0;
`;

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const InfoText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

interface FileUploadFieldProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  preview?: string;
  recommendedText: string;
  icon: React.ReactNode;
}

function FileUploadField({
  id,
  label,
  register,
  preview,
  recommendedText,
  icon,
}: FileUploadFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        type="file"
        id={id}
        accept="image/*"
        {...register(id)}
        style={{ display: "none" }}
      />
      <FileUploadArea as="label" htmlFor={id}>
        <UploadIcon>{icon}</UploadIcon>
        <UploadText>Click to upload {label.toLowerCase()}</UploadText>
      </FileUploadArea>
      {preview && (
        <PreviewWrapper>
          <PreviewImage src={preview} alt={`${label} preview`} />
        </PreviewWrapper>
      )}
      <InfoText>
        <AlertCircle size={16} />
        {recommendedText}
      </InfoText>
    </div>
  );
}

export default FileUploadField;
