import React, { useEffect, useState, useRef } from "react";
import { BiCheck } from "react-icons/bi";
const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  //mis a jour des steps
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: true,
          selected: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          highlighted: false,
          selected: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          highlighted: false,
          selected: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center justify-between"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`flex rounded-full border-2 h-10 w-10 justify-center items-center border-gray-400 py-3 transition duration-200 ease-in-out ${
              step.selected
                ? "bg-green-600 text-white font-bold border-2 border-white"
                : ""
            }`}
          >
            {/* number of step */}
            {step.completed ? (
            //   <span className=" text-white text-3xl font-bold">
            //     {" "}
                <BiCheck className=" fill-white/90 font-extrabold text-4xl" />
            //   </span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-12 w-32 text-xs font-medium uppercase ${
              step.highlighted ? " text-gray-900 text-2xl" : "text-gray-300"
            }`}
          >
            {/* description of step */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-4 transition duration-200 ease-in-out ${
            step.completed ? "border-green-600" : "border-gray-300"
          }`}
        >
          {/* content of step */}
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="py-6 mx-auto px-12 flex justify-around items-center">
        {displaySteps}
      </div>
    </>
  );
};

export default Stepper;
