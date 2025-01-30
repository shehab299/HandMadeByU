import SignupForm from "@features/auth/signup/SignupForm";
import { useAuthCheck } from "@hooks/useAuthCheck";

function Signup() {
  useAuthCheck();
  
  return <SignupForm />;
}

export default Signup;
