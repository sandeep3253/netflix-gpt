import React, { useState, useRef } from "react";
import Header from './Header';
import { validate } from './Validate'; // Make sure this path is correct
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './Firebase';
const Login = () => {
  const [page, setPage] = useState(true); 
  const [validationMessage, setValidationMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateCheck = () => {
    const message = validate(emailRef.current.value, passwordRef.current.value);
    setValidationMessage(message); 
    if(message) return;
     if(!page){
      createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationMessage(errorCode+" "+ errorMessage);
      });
     }
     else{
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidationMessage(errorCode+"-"+errorMessage);
  });
     }

  };

  const handlePageToggle = () => {
    setPage(!page); 
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
          alt="Netflix promotional banner"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute px-10 bg-black mx-auto my-36 left-0 right-0 text-white bg-opacity-80"
      >
        <h1 className="py-4 text-3xl w-full">{page ? "Sign In" : "Sign Up"}</h1>
        {!page && (
          <input
            className="py-4 m-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={emailRef}
          className="py-4 m-4 w-full bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={passwordRef}
          className="py-4 m-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
          <p className="bg-red-500 text-white">{validationMessage}</p>
      
        <button
          className="bg-red-700 w-full py-4 m-4 cursor-pointer"
          onClick={validateCheck}
        >
          {page ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handlePageToggle}>
          {page ? "Netflix user? Ready to sign in" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
