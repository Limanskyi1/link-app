import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import "./Message.scss";

export const Message = ({text,icon}) => {
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
      {icon}
      <p>{text}</p>
    </div>
  );
};
