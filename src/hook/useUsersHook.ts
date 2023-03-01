

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



export const useUserHook = () => {

    const { users } = useSelector( (state: RootState) => state.users )




    return{
        users,

    }
}