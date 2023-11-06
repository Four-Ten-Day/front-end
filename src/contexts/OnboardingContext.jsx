import { createContext, useContext, useReducer } from 'react';

export const ANSWER_WITH_OTEHR_PEOPLE = 'answerWithOtherPeople';
export const ANSWER_INTERESTS = 'answerInterests';

const OnboardingContext = createContext();

const initialState = {
  withOtherPeople: false,
  selectedInterests: [],
  transportation: null,
  travelDistance: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ANSWER_WITH_OTEHR_PEOPLE:
      return {
        ...state,
        withOtherPeople: action.payload,
      };
    case ANSWER_INTERESTS:
      let newInterests;

      if (state.selectedInterests.includes(action.payload)) {
        newInterests = state.selectedInterests.filter(
          (interest) => interest !== action.payload
        );
      } else {
        newInterests = [...state.selectedInterests, action.payload];
      }

      return {
        ...state,
        selectedInterests: newInterests,
      };
    default:
      throw new Error('부적절한 action.type 사용');
  }
}

function OnboardingProvider({ children }) {
  const [
    { withOtherPeople, selectedInterests, transportation, travelDistance },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <OnboardingContext.Provider
      value={{
        withOtherPeople,
        selectedInterests,
        transportation,
        travelDistance,
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
