
import { linksObj } from "../../constants/selectValues";
import { ArrowSvg } from "../../icons";
export const PreviewInfo = ({user_name,user_last_name,email,links,setImage}) => {
  return (
    <div className="preview__info">
      <img src={setImage} alt="" />
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


