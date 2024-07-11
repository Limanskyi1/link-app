import phoneSvg from "../../assets/preview-phone.svg";
import { useUserProfile } from "../../hooks/useUserProfile";
import "./Preview.scss";
import { PreviewInfo } from "./PreviewInfo";

export const Preview = () => {
  const {avatar,user_name,user_last_name,email,links,setImage} = useUserProfile();
  return (
    <div className="block-preview">
      <div className="preview">
        <img className="bg" src={phoneSvg} alt="" />
        <PreviewInfo user_name={user_name} user_last_name={user_last_name} email={email} links={links} setImage={setImage}/>
      </div>
    </div>
  );
};
