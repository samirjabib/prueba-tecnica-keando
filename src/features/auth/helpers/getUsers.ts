import data from '../../../data/data.json';

interface Form {
  uid?: string;
  email: string;
  password: string;
}

console.log(data);

export const getUser = (form: Form) => {
  const {email, password} = form;

  const emailUser = email.toLowerCase();
  const passwordUser = password.toLowerCase();


  const user = data.filter(
    user => user.email === emailUser && user.password === passwordUser,
  );


  return user[0];
};
