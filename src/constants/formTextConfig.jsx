import { Link } from "react-router-dom";

export const FormTextConfig = {
  login: {
    title: "Login",
    subtitle: "Add your details below to get back into the app",
    buttonText: "Login",
    bottomText: (
      <>
        Don’t have an account? <Link to="/register">Create account</Link>
      </>
    ),
  },
  reg: {
    title: "Create account",
    subtitle: "Let’s get you started sharing your links!",
    buttonText: "Create new account",
    bottomText: (
      <>
        Already have an account? <Link to="/login">Login</Link>
      </>
    ),
  },
};
