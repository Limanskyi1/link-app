import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/userSlice';

export const useFetchUserData = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchUserData(user.id));
    }
  }, []);
};

