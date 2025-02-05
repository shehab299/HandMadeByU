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

    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-input-border);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  & input:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-input-border);
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const Label = styled.label`
  display: block;

  text-transform: capitalize;
  color: #4a4a4a;
  font-weight: 500;
`;

const Error = styled.p`
  color: var(--color-error);

  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

type Props = {
  id: string;
  error?: string | undefined;
  register?: UseFormRegister<any>;
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
  placeholder,
  ...props
}: Props) {
  return (
    <Container $error={!!error}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {type == "textArea" ? (
        <TextArea
          {...register?.(id!, { validate })}
          id={id}
          aria-invalid={!!error}
          autoComplete="on"
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register?.(id!, { validate })}
          {...props}
          type={type}
          id={id}
          aria-invalid={!!error}
          autoComplete="on"
          placeholder={placeholder}
        />
      )}
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default InputField;
export { Label, Error };
