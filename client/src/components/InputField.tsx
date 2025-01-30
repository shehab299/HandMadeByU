import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div<{ $error: boolean }>`
  display: flex;
  flex-direction: column;

  gap: 0.2rem;

  & input {
    border: 1px solid;
    border-radius: 5px;
    padding: 0.5rem;
    border-color: ${({ $error }) =>
      $error ? "var(--color-error)" : "var(--color-input-border)"};
  }

  & input:focus {
    outline: none;
  }
`;

const Label = styled.label`
  text-transform: capitalize;
`;

const Error = styled.p`
  color: var(--color-error);
`;

type Props = {
  id: string;
  error: string | undefined;
  register: UseFormRegister<any>;
  label?: string;
  validate?: (value: string) => string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

function InputField({
  id,
  error,
  type,
  register,
  validate,
  label,
  ...props
}: Props) {
  return (
    <Container $error={!!error}>
      <Label htmlFor={id}>{label || type}</Label>
      <input
        {...register(id!, { validate })}
        {...props}
        type={type}
        id={id}
        aria-invalid={!!error}
        autoComplete="on"
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default InputField;
