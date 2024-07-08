import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Preview } from "../components/Preview";
import { Message } from "../components/Message";
import { useEffect } from "react";
import { getFromLocalStorage } from "../services/localStorage.service";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getFromLocalStorage("user");
    const id = user.uid;
    dispatch(setUserId(id))
  },[])

  return (
    <>
      <Header />
      <div className="container">
        <div className="layout-grid">
          <div className="block-1 flex-all-center">
              <Preview/>
          </div>
          <Links/>
        </div>
      </div>
      <Message text="Your changes have been successfully saved!"/>
    </>
  );
};
