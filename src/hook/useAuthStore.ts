import {onLogout, onLogin} from '../store/slices/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';

interface User {
  uid: string;
  email: string;
  password: string;
}

export const useAuthStore = () => {
  const { name, password, uid} = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = (user: User) => {
    dispatch(onLogin(user));
  };

  const handleLogout = () => {
    dispatch(onLogout('Esta cuenta no existe'));
  };

  return {
    //Propierties
    name,
    password,
    uid,

    //Methods
    handleLogin,
    handleLogout,
  };
};
