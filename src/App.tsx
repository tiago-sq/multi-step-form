import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [year, setYear] = useState<number>(0);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleNameSubmit = (name: string) => {
    setName(name);
    setStep(3);
  };

  const handleAgeSubmit = (age: number) => {
    setYear(age);
    setStep(4);
  }

  const handleReset = () => {
    setStep(1);
    setName('');
    setYear(0);
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 onNext={handleNameSubmit} />}
      {step === 3 && <Step3 onNext={handleAgeSubmit} />}
      {step === 4 && <Step4 age={year} name={name} onReset={handleReset} />}
    </div>
  );
};

export default App;
