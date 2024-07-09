import { Select } from "./Select";
import { useDispatch } from "react-redux";
import {
  changeLinkName,
  changeLinkUrl,
  removeLink,
} from "../../redux/userSlice";
import linkSvg from "../../assets/link-svg.svg";

export const LinksItem = ({ selectValue, index, inputValue, error }) => {
  const dispatch = useDispatch();

  const onChangeSelect = (value) => {
    dispatch(
      changeLinkName({
        value,
        index,
      })
    );
  };

  const onChangeInput = (e) => {
    dispatch(
      changeLinkUrl({
        value: e.target.value,
        index,
      })
    );
  };

  const onClickRemove = () => {
    dispatch(removeLink(index));
  };

  return (
    <div className="links__item">
      <div className="top">
        <span>Link #{index + 1}</span>
        <span className="remove" onClick={onClickRemove}>
          Remove
        </span>
      </div>
      <span>Platform</span>
      <Select
        error={error?.name}
        selectValue={selectValue}
        onChangeSelect={onChangeSelect}
      />
      <span>Link</span>
      <LinksItem.Input
        error={error?.url}
        value={inputValue}
        onChangeInput={onChangeInput}
      />
    </div>
  );
};



LinksItem.Input = ({ value, onChangeInput, error }) => {

  return (
    <>
      <div className={`input`}>
        <img src={linkSvg} alt="" />
        <input onChange={onChangeInput} type="text" value={value} />
      </div>
      <span className="error">{error}</span>
    </>
  );
};
