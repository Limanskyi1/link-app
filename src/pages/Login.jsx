// Components
import { Form } from "../components/Form";
// Hooks
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
// Services
import authService from "../services/authService";
// Redux
import { setUser, setUserData} from "../redux/userSlice";
import fireBaseService from "../services/fireBaseService";

export const Login = () => {
  const [authError, setAuthError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const email = data.email;
    const password = data.password;
    try {
      const user = await authService.login(email, password);
      const data = await fireBaseService.getUserData(user.uid);
      dispatch(setUser(true));
      dispatch(setUserData(data));
      setAuthError(null);
      navigate('/');
    } catch (error) {
      console.log(error);
      setAuthError(error.message);
    }
  };

  return <Form mode="login" onSubmit={handleLogin} authError={authError}/>;
};
