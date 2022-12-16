import React from 'react'
import { useContext } from "react";
import { StepperContext } from "../context/StepperContext";

const PersonalInfo = () => {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  return (
    <div className="flex flex-col">
     Adress
      <div className="my-2 p-1 flex">
        <label htmlFor="city"></label>
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
          value={userData["city"] || ""}
          placeholder="city"
          className="px-2 py-2 text-gray-800 border-2 border-gray-100 outline-none appearance-none rounded-lg w-full"
        />
      </div>
      <div className="my-2 p-1 flex">
        <label htmlFor="adress"></label>
        <input
          type="text"
          name="adress"
          id="adress"
          onChange={handleChange}
          value={userData["adress"] || ""}
          placeholder="Adress"
          className="px-2 py-2 text-gray-800 border-2 border-gray-100 outline-none appearance-none rounded-lg w-full"
        />
      </div>
    </div>
  )
}

export default PersonalInfo
