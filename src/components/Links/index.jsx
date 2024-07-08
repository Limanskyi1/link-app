import "./Links.scss";
import { LinksEmpty } from "./LinksEmpty";
import { LinksHeader } from "./LinksHeader";
import { useSelector } from "react-redux";
import { LinksItem } from "./LinksItem";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { saveUserData } from "../../utils/saveUserData";
export const Links = () => {
  const links = useSelector((state) => state.user.data?.links);
  const { imagePreviewFile, setIsVisibleMessage } = useContext(AppContext);
  const id = useSelector((state) => state.user.id);
  const data = useSelector((state) => state.user?.data);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    links.forEach((link, index) => {
      if (!link.url) {
        newErrors[index] = newErrors[index] || {};
        newErrors[index].url = "URL is required";
      }
      if (link.name === "EMPTY") {
        newErrors[index] = newErrors[index] || {};
        newErrors[index].name = "Platform is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onClickSave = async () => {
    if (validateFields()) {
      await saveUserData(id, data, imagePreviewFile, setIsVisibleMessage);
    }
  };

  return (
    <div className="links">
      <LinksHeader />
      {links?.length === 0 && <LinksEmpty />}
      <div className="list">
        {links?.length > 0 &&
          links.map((link, index) => (
            <LinksItem
              inputValue={link.url}
              key={index}
              selectValue={link.name}
              index={index}
              error={errors[index]}
            />
          ))}
      </div>

      <button onClick={onClickSave} className="btn-save">
        Save
      </button>
    </div>
  );
};
