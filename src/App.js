import React, { useState } from "react";
import Stepper from "./components/multiStepForms/Stepper";
import StepperControl from "./components/multiStepForms/StepperControl";
import Account from "./components/multiStepForms/steps/Account";
import Payement from "./components/multiStepForms/steps/Payement";
import PersonalInfo from "./components/multiStepForms/steps/PersonalInfo";
import Step3 from "./components/multiStepForms/steps/Step3";
import { StepperContext } from "./components/multiStepForms/context/StepperContext";
// import { useState, useEffect, useMemo } from "react";
// import Nav from "./Nav";
//import Wizard from "./Wizard";
const App = () => {
  // const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(10);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setCount((previewCount) => previewCount + 1); //mieux que setcount(count+1)
  // };
  // useEffect(() => {
  //   document.title = count;
  // }, [count]);
  // const squareNumber = useMemo(() => {
  //   // console.log(number)
  //   return Math.sqrt(parseInt(number));
  // }, [number]); //useMemo(() => {}, []);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["start", "step2", "step3", "finish"];
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <PersonalInfo />;
      case 3:
        return <Payement />;
      case 4:
        return <Step3 />;
      default:
        break;
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    console.log(direction, currentStep);
    direction === "Next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      <div className="mx-auto shadow-xl rounded-2xl bg-white/90 md:w-10/12 w-2/3">
        {/* Stepper */}
        <div className=" container m-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Display component with context */}
        <div className="py-10 mx-auto px-12">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        {/* Navigation */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
        {/* <input
          type="number"
          className=" py-2 px-10 border rounded-lg"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h2>{squareNumber}</h2>
        <button
          onClick={handleClick}
          className=" py-2 px-16 text-center rounded-lg m-4 text-white/90 font-semibold bg-purple-300 "
        >
          {" "}
          {count}{" "}
        </button>
      </div>
      <Nav />
     <Wizard/> */}
      </div>
    </>
  );
};

export default App;
