import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useSelector } from "react-redux";
import emptyImg from "../../assets/empty-img.svg";
import { linksObj } from "../../constants/selectValues";
import { ArrowSvg } from "../../icons";

export const PreviewInfo = () => {
  const { imagePreview } = useContext(AppContext);
  const {
    avatar,
    user_name,
    user_last_name,
    email,
    links = null,
  } = useSelector((state) => {
    return state.user.data ? state.user.data : {};
  });
  const setImage = () => {
    if (imagePreview) {
      return imagePreview;
    } else if (avatar) {
      return avatar;
    } else {
      return emptyImg;
    }
  };
  return (
    <div className="preview__info">
      <img src={setImage()} alt="" />
      <p className="name">
        {user_name} {user_last_name}
      </p>
      <a className="mail" href={`mailto:${email}`}>
        {email}
      </a>
      <div className="preview__list">
        {links &&
          links?.length > 0 &&
          links.map((link, index) => (
            <a
              className={linksObj[link.name].className}
              key={index}
              href={link.url}
            >
              {linksObj[link.name].icon}
              <span>{linksObj[link.name].text}</span>
              <ArrowSvg />
            </a>
          ))}
      </div>
    </div>
  );
};


