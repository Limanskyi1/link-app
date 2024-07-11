// src/hooks/useUserProfile.js
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext'; 
import emptyImg from '../assets/empty-img.svg'; 

export const useUserProfile = () => {
  const { imagePreview } = useContext(AppContext);
  
  const {
    avatar,
    user_name,
    user_last_name,
    email,
    links = null,
  } = useSelector((state) => {
    return state.user.data ? state.user.data : {};
  });

  const setImage = () => {
    if (imagePreview) {
      return imagePreview;
    } else if (avatar) {
      return avatar;
    } else {
      return emptyImg;
    }
  };

  return {
    avatar,
    user_name,
    user_last_name,
    email,
    links,
    setImage: setImage(),
  };
};


