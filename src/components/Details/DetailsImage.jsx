import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const DetailsImage = () => {
  const [uploading, setUploading] = useState(false);
  const user = useSelector((state) => state.user);
  const {imagePreview, setImagePreview,setImagePreviewFile,imagePreviewFile} = useContext(AppContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreviewFile(file);
      setUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="image">
      <p>Profile picture</p>
      <div className="image__item">
        <input
          type="file"
          id="imageUpload"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          disabled={uploading}
        />
        <div className="image__preview">
          {imagePreview ? (
            <img src={imagePreview} alt="Profile Preview" />
          ) : (
            <img src="./src/assets/image-upload.png" alt="Profile Preview" />
          )}
        </div>
      </div>
      {uploading && <p>Uploading...</p>}
      <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
    </div>
  );
};
