import React, { createContext, useContext, useState } from 'react';
import Row from './Row';

const ProgressiveContext = createContext();

const ProgressiveForm = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <ProgressiveContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </ProgressiveContext.Provider>
  );
};

function Header({ totalSteps }) {
  const { currentStep } = useContext(ProgressiveContext);
  return (
    <Row>
      <span>
        {currentStep} / {totalSteps}
      </span>
    </Row>
  );
}

function Title({ title }) {
  return (
    <Row>
      <span>{title}</span>
    </Row>
  );
}

function Content({ children }) {
  return <>{children}</>;
}

ProgressiveForm.Header = Header;
ProgressiveForm.Title = Title;
ProgressiveForm.Content = Content;

export default ProgressiveForm;
