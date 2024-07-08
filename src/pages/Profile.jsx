import { Header } from "../components/Header";
import { Details } from "../components/Details";
import { Preview } from "../components/Preview";
import { Message } from "../components/Message";

export const Profile = () => {

  return (
    <>
      <Header />
      <div className="container">
        <div className="layout-grid">
          <div className="block-1 flex-all-center">
              <Preview/>
          </div>
          <Details />
        </div>
      </div>
      <Message text="Your changes have been successfully saved!"/>
    </>
  );
};
