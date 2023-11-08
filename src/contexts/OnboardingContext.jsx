import { createContext, useContext, useReducer } from 'react';

import { ReactComponent as ActiveSvg } from '../../public/interest-active.svg';
import { ReactComponent as ChallengingSvg } from '../../public/interest-challenging.svg';
import { ReactComponent as ContemplativeSvg } from '../../public/interest-contemplative.svg';
import { ReactComponent as RetroSvg } from '../../public/interest-retro.svg';
import { ReactComponent as RomanticSvg } from '../../public/interest-romantic.svg';
import { ReactComponent as TrendySvg } from '../../public/interest-trendy.svg';
import { ReactComponent as ExoticSvg } from '../../public/interest-exotic.svg';

export const CLICK_ALONE = 'clickAlone';
export const CLICK_TOGETHER = 'clickTogether';
export const SELECT_INTERESTS = 'answerInterests';
export const SELECT_ALL_INTERSTS = 'selectAllInterests';

const OnboardingContext = createContext();

const interestsConfig = [
  {
    // emoji: <ActiveSvg />,
    emoji: <RomanticSvg />,
    value: 'a',
    label: '활동적인',
  },
  {
    emoji: <RomanticSvg />,
    value: 'b',
    label: '로맨틱한',
  },
  {
    emoji: <ExoticSvg />,
    value: 'c',
    label: '이국적인',
  },
  {
    emoji: <TrendySvg />,
    value: 'd',
    label: '트렌디한 ',
  },
  {
    emoji: <ContemplativeSvg />,
    value: 'e',
    label: '사색적인',
  },
  {
    emoji: <RetroSvg />,
    value: 'f',
    label: '복고풍의',
  },
  {
    emoji: <ChallengingSvg />,
    value: 'g',
    label: '도전적인',
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
