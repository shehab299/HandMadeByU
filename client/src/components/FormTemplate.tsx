import styled from "styled-components";

const FormCard = styled.form`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;

  & button {
    width: 100%;
  }
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

interface FormCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

function FormTemplate({
  title,
  subtitle,
  icon,
  onSubmit,
  children,
}: FormCardProps) {
  return (
    <FormCard onSubmit={onSubmit}>
      <Title>
        {icon}
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </FormCard>
  );
}

export default FormTemplate;
export { FormGroup };
