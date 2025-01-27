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
  error: string | undefined;
  type: "password" | "email";
  register: UseFormRegister<any>;
};

function InputField({ error, type, register }: Props) {
  return (
    <Container $error={!!error}>
      <Label htmlFor={type}>{type}</Label>
      <input {...register(type)} type={type} id={type} aria-invalid={!!error} />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default InputField;
