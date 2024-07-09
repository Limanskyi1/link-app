import React, { useContext, useEffect, useState } from "react";
import "./Details.scss";
import { DetailsImage } from "./DetailsImage";
import { setUserField } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../context/AppContext";
import { DetailsInput } from "./DetailsInput";
import { DetailsHeader } from "./DetailsHeader";
import { saveUserData } from "../../utils/saveUserData";

export const Details = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user?.id);
  const data = useSelector((state) => state.user?.data);
  const { user_name = "", user_last_name = "" } = { ...data };
  const { imagePreviewFile, setIsVisibleMessage } = useContext(AppContext);
  const [errors, setErrors] = useState({});
  const [isSubmitForm, setIsSubmitForm] = useState(false);

  const onChangeInput = (e, fieldName) => {
    const payload = {
      value: e.target.value,
      fieldName,
    };
    dispatch(setUserField(payload));
    validateInput({ ...data, [fieldName]: e.target.value });
  };

  const onClickSave = async () => {
    await saveUserData(id, data, imagePreviewFile, setIsVisibleMessage);
  };

  const validateInput = (updatedData) => {
    const newErrors = {};
    if (!updatedData?.user_name) {
      newErrors.user_name = "First name is required.";
    }
    if (!updatedData?.user_last_name) {
      newErrors.user_last_name = "Last name is required.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitForm(false);
      return;
    }
    setErrors({});
    setIsSubmitForm(true);
  };

  useEffect(() => {
    validateInput(data);
  }, [data]);

  return (
    <div className="details">
      <DetailsHeader />
      <form>
        <DetailsImage />
        <div className="info">
          <DetailsInput
            name={"First name*"}
            onChangeInput={onChangeInput}
            inputName="user_name"
            value={user_name}
            error={errors.user_name}
          />
          <DetailsInput
            name={"Last name*"}
            onChangeInput={onChangeInput}
            inputName="user_last_name"
            value={user_last_name}
            errorr={errors}
            error={errors.user_last_name}
          />
        </div>
      </form>
      <button
        disabled={isSubmitForm ? false : true}
        onClick={onClickSave}
        className="btn-save"
      >
        Save
      </button>
    </div>
  );
};
