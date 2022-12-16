import React from "react";
import { useContext } from "react";
import { StepperContext } from "../context/StepperContext";
const Step3 = () => {
  const { userData, setUserData } = useContext(StepperContext);
  //console.log(userData)

  return (
    <div className="flex flex-col justify-center items-center mx-auto text-center space-y-4">
   
      <p >{userData.username}</p> 
      <p >{userData.city}</p> 
      <button
        className={`
           bg-green-600 text-white uppercase py-2 px-4 rounded-xl font-semibold
           cursor-pointer border-2 border-green-200 hover:bg-slate-700 hover:text-white
           transition duration-200 ease-in-out
           `}
      >
        close
      </button>
    </div>
    
  );
};

export default Step3;
