import React, { useState } from "react";
import { Form } from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../services/authService";
import { setUser , setUserData} from "../redux/userSlice";
import fireBaseService from "../services/fireBaseService";

export const Register = () => {
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleReg = async (data) => {
    const email = data.email;
    const password = data.password;
    if(password.length < 6){
      setAuthError("Password should be at least 6 characters");
      return
    }
    try {
      const user = await authService.register(email, password);
      const data = await fireBaseService.getUserData(user.uid);
      dispatch(setUser(true));
      dispatch(setUserData(data));
      setAuthError(null);
      navigate('/');
    } catch (error) {
      console.log(error);
      setAuthError("Email already in use");
    }
  };

  return <Form mode="reg" onSubmit={handleReg} authError={authError}/>;
};
