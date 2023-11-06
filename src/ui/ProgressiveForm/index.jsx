import React, { createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const TOTAL_STEPS = 3;

const ProgressiveContext = createContext();

const ProgressiveForm = ({ children, currentStep }) => {
  return (
    <ProgressiveContext.Provider
      value={{ currentStep, totalSteps: TOTAL_STEPS }}
    >
      {children}
    </ProgressiveContext.Provider>
  );
};

function Elipse() {
  const { currentStep, totalSteps } = useContext(ProgressiveContext);

  return (
    <S.Ellipses>
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <S.Ellipse key={idx} isblack={idx < currentStep} />
      ))}
    </S.Ellipses>
  );
}

function Title({ children }) {
  return <S.Title as="h1">{children}</S.Title>;
}

function Content({ children }) {
  return <S.Content>{children}</S.Content>;
}

function NextButton({ to, children, disabled, selected }) {
  return createPortal(
    <S.ButtonFrame>
      <S.NextButton
        as={Link}
        to={to}
        disabled={disabled}
        variations="secondary"
        selected={selected}
        onClick={disabled ? (e) => e.preventDefault() : () => {}}
      >
        {children}
      </S.NextButton>
    </S.ButtonFrame>,
    document.body
  );
}

ProgressiveForm.Elipse = Elipse;
ProgressiveForm.Title = Title;
ProgressiveForm.Content = Content;
ProgressiveForm.NextButton = NextButton;

export default ProgressiveForm;
