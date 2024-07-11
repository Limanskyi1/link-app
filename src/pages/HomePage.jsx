import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Preview } from "../components/Preview";
import { Message } from "../components/Message";
import { getFromLocalStorage } from "../services/localStorage.service";
import { setUserId } from "../redux/userSlice";
import { MainLayout } from "../layouts/MainLayout";
import { IconData } from "../icons";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getFromLocalStorage("user");
    const id = user.uid;
    dispatch(setUserId(id));
  }, []);

  return (
    <>
      <MainLayout>
        <Header />
        <div>
          <Preview />
          <Links />
        </div>
      </MainLayout>
      <Message icon={<IconData/>} text="Your changes have been successfully saved!" />
    </>
  );
};
