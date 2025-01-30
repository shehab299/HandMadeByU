import LoginForm from "@features/auth/login/LoginForm";
import { useAuthCheck } from "@hooks/useAuthCheck";

function Login() {
  useAuthCheck();

  return <LoginForm />;
}

export default Login;
