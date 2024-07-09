import { Header } from "../components/Header";
import { Details } from "../components/Details";
import { Preview } from "../components/Preview";
import { Message } from "../components/Message";
import { MainLayout } from "../layouts/MainLayout";

export const Profile = () => {

  return (
    <>
       <MainLayout>
        <Header />
        <div>
          <Preview />
          <Details />
        </div>
      </MainLayout>
      <Message text="Your changes have been successfully saved!"/>
    </>
  );
};
