import { Header } from "../components/Header";
import { Details } from "../components/Details";
import { Preview } from "../components/Preview";
import { Message } from "../components/Message";
import { MainLayout } from "../layouts/MainLayout";
import { IconData } from "../icons";

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
      <Message icon={<IconData/>} text="Your changes have been successfully saved!"/>
    </>
  );
};
