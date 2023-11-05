import { createContext, useContext, useReducer } from 'react';

export const ANSWER_WITH_OTEHR_PEOPLE = 'answerWithOtherPeople';

const OnboardingContext = createContext();

const initialState = {
  withOtherPeople: false,
  interests: [],
  transportation: null,
  travelTime: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ANSWER_WITH_OTEHR_PEOPLE:
      return {
        ...state,
        withOtherPeople: action.payload,
      };

    default:
      throw new Error('unknown action');
  }
}

function OnboardingProvider({ children }) {
  const [{ withOtherPeople, interests, transportation, travelTime }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <OnboardingContext.Provider
      value={{
        withOtherPeople,
        interests,
        transportation,
        travelTime,
        dispatch,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context)
    throw new Error('Onboarding Context 가 Onboarding Provider 외부에서 사용');

  return context;
}

export { OnboardingProvider, useOnboarding };
