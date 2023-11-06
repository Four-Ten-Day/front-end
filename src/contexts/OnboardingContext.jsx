import { createContext, useContext, useReducer } from 'react';

export const CLICK_ALONE = 'clickAlone';
export const CLICK_TOGETHER = 'clickTogether';
export const SELECT_INTERESTS = 'answerInterests';
export const SELECT_ALL_INTERSTS = 'selectAllInterests';

const OnboardingContext = createContext();

const interestsConfig = [
  {
    value: 'a',
    label: '이색적인',
  },
  {
    value: 'b',
    label: '활동',
  },
  {
    value: 'c',
    label: '매우매우 정적인',
  },
  {
    value: 'd',
    label: '긴글자를 ',
  },
  {
    value: 'e',
    label: '짧',
  },
  {
    value: 'f',
    label: '이런것두',
  },
  {
    value: 'g',
    label: '엄청나게 긴 글자가 있으면 레이아웃이 흐르도록',
  },
  {
    value: 'h',
    label: '짧',
  },
];

const initialState = {
  isWithOther: null,
  selectedInterests: [],
  transportation: null,
  travelDistance: null,
  allInterests: interestsConfig,
};

function reducer(state, action) {
  switch (action.type) {
    case CLICK_ALONE: {
      let newIsWithOther;

      if (state.isWithOther === false) newIsWithOther = null;
      else newIsWithOther = false;

      return {
        ...state,
        isWithOther: newIsWithOther,
      };
    }

    case CLICK_TOGETHER: {
      let newIsWithOther;

      if (state.isWithOther === true) newIsWithOther = null;
      else newIsWithOther = true;

      return {
        ...state,
        isWithOther: newIsWithOther,
      };
    }

    case SELECT_INTERESTS: {
      let newInterests;

      if (state.selectedInterests.includes(action.payload))
        newInterests = state.selectedInterests.filter(
          (interest) => interest !== action.payload
        );
      else newInterests = [...state.selectedInterests, action.payload];

      return {
        ...state,
        selectedInterests: newInterests,
      };
    }

    case SELECT_ALL_INTERSTS: {
      let newIntersts;

      if (state.selectedInterests.length === state.allInterests.length)
        newIntersts = [];
      else newIntersts = [...state.allInterests.map(({ value }) => value)];

      return {
        ...state,
        selectedInterests: newIntersts,
      };
    }

    default:
      throw new Error('부적절한 action.type 사용');
  }
}

function OnboardingProvider({ children }) {
  const [
    {
      isWithOther,
      selectedInterests,
      transportation,
      travelDistance,
      allInterests,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <OnboardingContext.Provider
      value={{
        isWithOther,
        selectedInterests,
        transportation,
        travelDistance,
        dispatch,
        allInterests,
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
