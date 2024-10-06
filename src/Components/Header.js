import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from './Slice';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {auth} from './Firebase';
import { useNavigate } from "react-router-dom";
import { addUser,removeUser} from "./Slice";
import {LOGO} from "./Constant";
const Header=()=>{
    const navigate= useNavigate();
    const dispatch = useDispatch();
    useEffect (()=>{
      const unsubcribed =onAuthStateChanged(auth, (user) => {
          if (user) {
      
            const {uid,email,displayName}= user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName}));
           navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
        unsubcribed();
      },[])
    return(
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black"> 
        <img className="w-44" src={LOGO} alt="value"/>
     </div>
    )
}
export default Header;