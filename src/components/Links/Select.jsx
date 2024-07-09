import { useEffect, useState } from "react";
import { linksObj, selectValues } from "../../constants/selectValues";

export const Select = ({ selectValue, onChangeSelect, error }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClickWindow = (e) => {
      const target = e.target;
      if (!target.closest(".select")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClickWindow);
    return () => {
      document.removeEventListener("click", onClickWindow);
    };
  }, []);

  return (
    <>
      <div className={`select`} onClick={() => setOpen(!open)}>
        <div className="current">
          {linksObj[selectValue].icon}
          {linksObj[selectValue].text}
        </div>
        <ul className={`dropdown ${open ? "open" : ""}`}>
          {selectValues
            .filter((item) => item.value !== selectValue)
            .map((item) => (
              <li onClick={() => onChangeSelect(item.value)} key={item.text}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
        </ul>
      </div>
      <span className="error">{error}</span>
    </>
  );
};
