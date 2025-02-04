import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validation } from "./schema/validation.ts";

import InputField from "@components/InputField";
import Button from "@components/Button";
import SpinnerMini from "@components/SpinnerMini";

import { inputsData } from "./inputsData";
import { useSignup } from "./hooks/useSignup.tsx";

type signupFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  username: string;
  age: number;
};

const Container = styled.div`
  background-color: #f5f6fa;
`;

const Names = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;

  & > div {
    flex: 1;
    max-width: 48%;
    box-sizing: border-box;
  }
`;

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: min(30rem, 95%);

  background-color: white;
  border-radius: 6px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.25);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<signupFormInputs>({
    resolver: yupResolver(validation),
    mode: "onTouched",
  });

  const { signup, isPending } = useSignup();

  const onSubmit: SubmitHandler<signupFormInputs> = async (data) => {
    const { confirmPassword, ...credentials } = data;
    signup(credentials);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div>
          <Names>
            {inputsData.map((input) => {
              if (input.id === "firstName" || input.id === "lastName") {
                return (
                  <div key={input.id}>
                    <InputField
                      id={input.id}
                      type={input.type}
                      label={input.label}
                      register={register}
                      error={
                        errors[input.id as keyof signupFormInputs]?.message
                      }
                    />
                  </div>
                );
              }
              return null;
            })}
          </Names>
          {inputsData.map((input) => {
            if (input.id !== "firstName" && input.id !== "lastName")
              return (
                <InputField
                  id={input.id}
                  key={input.id}
                  type={input.type}
                  label={input.label}
                  register={register}
                  error={errors[input.id as keyof signupFormInputs]?.message}
                  min={input.id === "age" ? 1 : undefined}
                  validate={
                    input.id === "confirmPassword"
                      ? (val: string) => {
                          if (watch("password") !== val) {
                            return "Your passwords do not match";
                          }
                        }
                      : undefined
                  }
                />
              );
          })}
        </div>
        <div>
          <Button
            $variety="secondary"
            type="submit"
            disabled={isSubmitting || isPending}
          >
            {isSubmitting || isPending ? <SpinnerMini /> : "Signup"}
          </Button>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </Form>
    </Container>
  );
}

export default SignupForm;
