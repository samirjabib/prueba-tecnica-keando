
import { authSlice, onLogin } from '../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';


interface User{
    uid:string,
    email:string,
    password:string,
}

export const useAuthStore = () => {

    const { name, password, uid } = useSelector( (state: RootState) => state.auth )
    const dispatch = useDispatch()

    const handleLogin = (user:User) => {

        dispatch(onLogin(user))
    }

    return{
        handleLogin
    }
} 