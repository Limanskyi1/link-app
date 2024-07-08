import { useEffect, useState } from "react";
import iconData from "../../assets/icon-data.svg";
import "./Message.scss";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const Message = ({text}) => {
  const {isVisibleMessage,setIsVisibleMessage} = useContext(AppContext);

  const showMessage = () => {
    if(isVisibleMessage){
        setIsVisibleMessage(true);
        const timer = setTimeout(() => {
            setIsVisibleMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    showMessage();
  },[isVisibleMessage]);

  return (
    <div className={`message ${isVisibleMessage ? "fade-in" : "fade-out"}`}>
      <img src={iconData} alt="" />
      <p>{text}</p>
    </div>
  );
};
