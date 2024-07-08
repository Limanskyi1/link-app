import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useSelector } from "react-redux";
import emptyImg from "../../assets/empty-img.svg";
import { linksObj } from "../../constants/selectValues";

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
    <div className="info">
      <img src={setImage()} alt="" />
      <p className="name">
        {user_name} {user_last_name}
      </p>
      <a className="mail" href={`mailto:${email}`}>
        {email}
      </a>
      <div className="list">
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

function ArrowSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.66699 7.33355V8.66688H10.667L7.00033 12.3335L7.94699 13.2802L13.227 8.00022L7.94699 2.72021L7.00033 3.66688L10.667 7.33355H2.66699Z" />
    </svg>
  );
}
