import { useEffect, useState } from "react";
import { linksObj, selectValues } from "../../constants/selectValues";
import { useDispatch } from "react-redux";
import { changeLinkName, changeLinkUrl , removeLink } from "../../redux/userSlice";
import linkSvg from '../../assets/link-svg.svg';

export const LinksItem = ({ selectValue, index , inputValue,error}) => {


  const dispatch = useDispatch();

  const onChangeSelect = (value) => {
    dispatch(changeLinkName({
        value,
        index,
    }));
  };

  const onChangeInput = (e) => {
    dispatch(changeLinkUrl({
        value: e.target.value,
        index,
    }));
  }

  const onClickRemove = () => {
      dispatch(removeLink(index))
  };

  return (
    <div className="links__item">
      <div className="top">
        <span>Link #{index + 1}</span>
        <span className="remove" onClick={onClickRemove}>Remove</span>
      </div>
      <span>Platform</span>
      <LinksItem.Select
        error={error?.name}
        selectValue={selectValue}
        onChangeSelect={onChangeSelect}
      />
      <span>Link</span>
      <LinksItem.Input error={error?.url} value={inputValue} onChangeInput={onChangeInput}/>
    </div>
  );
};

LinksItem.Select = ({ selectValue, onChangeSelect, error }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClickWindow = (e) => {
      const target = e.target;
      if(!target.closest(".select")){
        setOpen(false);
      }
    };
    
    document.addEventListener("click", onClickWindow);
  
    return () => {
      document.removeEventListener("click", onClickWindow);
    };
}, []);

  return (
    <div className={`select ${error ? "error" : ""}`} onClick={() => setOpen(!open)}>
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
  );
};

LinksItem.Input = ({value,onChangeInput, error}) => {
    return (
        <div className={`input ${error ? "error" : ""}`}>
            <img src={linkSvg} alt="" />
            <input onChange={onChangeInput} type="text" value={value}/>
        </div>
    );
}
