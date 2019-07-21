import React, {useState} from 'react';
import Step0 from "./components/Step0.js";
import Step1 from "./components/Step2.js";
import Step2 from "./components/Step1.js";
import Step3 from "./components/Step3.js";
import Step4 from "./components/Step4.js";
import Step5 from "./components/Step5.js";
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);


function App() {

  const [step, setStep] = useState(0);

  const getStep = () => {
    switch (step) {
      case 0:
        return <Step0 nextStepClick={() => setStep(1)} />;
      case 1:
        return <Step1 nextStepClick={() => setStep(2)} />;
      case 2:
        return <Step2 nextStepClick={() => setStep(3)} />;
      case 3:
        return <Step3 nextStepClick={() => setStep(4)} />;
      case 4:
        return <Step4 nextStepClick={() => setStep(5)} />;
      case 5:
        return <Step5 nextStepClick={() => setStep(6)} />;
      default:
        return <Step0 nextStepClick={() => setStep(1)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center bg-white p-2">
        <img src="/geekguide.svg" alt="" width="80" />
      </div>
      <div className="relative flex-grow bg-blue">
        <div className="absolute h-full w-full">{getStep()}</div>
      </div>
      <div className="bg-white text-center p-2">Angelhack 2019</div>
    </div>
  );
}

export default withAuthenticator(App, true);
