import data from '../../../data/data.json'

interface User{
    uid:string,
    email:string,
    password:string,
}



export const getUser = (user:User) => {

    if(!user){
        return { message:`complete the fields`, status:404}
    }

    const { email, password } = user

    



}