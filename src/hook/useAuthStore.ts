import {onLogout, onLogin} from '../store/slices/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';

interface User {
  uid: string;
  email: string;
  password: string;
}


export const useAuthStore = () => {
  const { email, password, uid, status, errorMessage} = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = (user: User) => {
    dispatch(onLogin(user));
  };

  const errorLogout = ( ) => {
    dispatch(onLogout('No existe usuario'));
  };
  const handleLogout = ( ) => {
    dispatch(onLogout(''));
  };

  return {
    //Propierties
    email,
    password,
    uid,
    status,
    errorMessage,

    //Methods
    handleLogin,
    handleLogout,
    errorLogout,
  };
};
