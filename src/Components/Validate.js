 export const validate =(email,password)=>{
  const isEmail =/[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/.test(email);
   const ispassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$./test(password);
  if(!isEmail) return "Email is not valid";
  if(!ispassword)  return "password is not valid";
   return null;
}
