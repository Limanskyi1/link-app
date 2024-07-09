import phoneSvg from "../../assets/preview-phone.svg";
import "./Preview.scss";

import { PreviewInfo } from "./PreviewInfo";

export const Preview = () => {
  return (
    <div className="block-preview">
      <div className="preview">
        <img className="bg" src={phoneSvg} alt="" />
        <PreviewInfo />
      </div>
    </div>
  );
};
