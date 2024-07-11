import { NavLink } from "react-router-dom";
import { PreviewInfo } from "../components/Preview/PreviewInfo";
import { useSelector } from "react-redux";
import { useUserProfile } from "../hooks/useUserProfile";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Message } from "../components/Message";
import { IconLinkGray } from "../icons";

export const Preview = () => {
  const userId = useSelector((state) => state.user.id);
  const { avatar, user_name, user_last_name, email, links, setImage } =
    useUserProfile();
  const { setIsVisibleMessage } = useContext(AppContext);

  const onClickCopy = () => {
    if (userId) {
      const urlOrigin = window.location.origin;
      const linkToCopy = `${urlOrigin}/preview/${userId}`;
      navigator.clipboard.writeText(linkToCopy);
      setIsVisibleMessage(true);
    }
  };

  return (
    <>
      <div className="preview-page">
        <div className="container">
          <nav className="nav">
            <NavLink to="/" className="btn-transparent">
              Back to editor
            </NavLink>
            <button onClick={onClickCopy} className="btn-save">
              Share link
            </button>
          </nav>
          <div className="card">
            <PreviewInfo
              user_name={user_name}
              user_last_name={user_last_name}
              email={email}
              links={links}
              setImage={setImage}
            />
          </div>
        </div>
      </div>
      <Message icon={<IconLinkGray/>} text="The link has been copied to your clipboard!" />
    </>
  );
};
