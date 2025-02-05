import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validation } from "./schema/validation";

import InputField from "@components/InputField";
import Button from "@components/Button";
import SpinnerMini from "@components/SpinnerMini";

import { useLogin } from "./hooks/useLogin";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Container = styled.div`
  background-color: #f5f6fa;
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

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validation),
    mode: "onTouched",
  });

  const { login, isPending } = useLogin();

  async function onSubmit(data: LoginFormInputs) {
    login(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div>
          <InputField
            defaultValue="test1@gmail.com"
            error={errors?.email?.message}
            type="email"
            id="email"
            register={register}
          />
          <InputField
            defaultValue="12345"
            register={register}
            error={errors?.password?.message}
            type="password"
            id="password"
          />
        </div>
        <div>
          <Button $variety="gradient" type="submit" disabled={isSubmitting || isPending}>
            {isSubmitting || isPending ? <SpinnerMini /> : "Login"}
          </Button>
          <p>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;
