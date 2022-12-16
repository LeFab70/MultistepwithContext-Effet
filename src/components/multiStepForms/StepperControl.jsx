import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <>
      <div className=" container flex justify-around items-center mt-4 mb-6 py-3 ">
        {/* bouton precedent*/}
        <button
          onClick={() => handleClick('Back')}
          className={`
           bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold
           cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white
           transition duration-200 ease-in-out
           ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}
        `}
        >
          Back
        </button>

        {/* bouton suivant*/}
        <button
          onClick={() => handleClick('Next')}
          className={`
           bg-green-600 text-white uppercase py-2 px-4 rounded-xl font-semibold
           cursor-pointer border-2 border-green-200 hover:bg-slate-700 hover:text-white
           transition duration-200 ease-in-out
           `}
        >
          {currentStep === steps.length  ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
};

export default StepperControl;
