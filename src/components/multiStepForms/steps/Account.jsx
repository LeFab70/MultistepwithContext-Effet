import React from "react";
import { useContext } from "react";
import { StepperContext } from "../context/StepperContext";
const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      Personal Information's
      <div className="my-2 p-1 flex">
        <label htmlFor="userName"></label>
        <input
          type="text"
          name="username"
          id="userName"
          onChange={handleChange}
          value={userData["username"] || ""}
          placeholder="userName"
          className="px-2 py-2 text-gray-800 border-2 border-gray-100 outline-none appearance-none rounded-lg w-full"
        />
      </div>
      <div className="my-2 p-1 flex">
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={userData["password"] || ""}
          placeholder="Password"
          className="px-2 py-2 text-gray-800 border-2 border-gray-100 outline-none appearance-none rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Account;
