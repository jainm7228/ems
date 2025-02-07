import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
  };
  return (
    <>
      <div className="flex h-screen w-screen  items-center justify-center">
        <div className="border-2 p-9 border-emerald-600">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
              className=" required outline-none  bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="required
              outline-none  bg-transparent 
               border-2 border-emerald-600 
               
               py-3 px-5 text-xl rounded-full 
                placeholder:text-grey-400
                mt-4"
              type="password"
              placeholder="Enter password"
            />
            <button
              className=" mt-5 text-white outline-noneplaceholder:text-white border-none
              bg-emerald-600 py-3 px-5 text-xl rounded-full"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
