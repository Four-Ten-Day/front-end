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
export const SELECT_DISTANCE = 'selectDistance';
export const INIT = 'init';

const OnboardingContext = createContext();

const modeConfig = {
  alone: new Set([
    '클라이밍',
    '스크린골프',
    'PC방',
    '수영장',
    '공원',
    '도시근린공원',
    '오락실',
    '테마카페',
    '테마파크',
    '복합문화공간',
    '공연장',
    '전시관',
    '도서관',
    '북카페',
    '식물원',
    '백화점',
    '코인노래방',
    '롤러',
    '인라인스케이트장',
    '라이브카페',
  ]),
  together: new Set([
    '당구장',
    '클라이밍',
    '스크린골프',
    'PC방',
    '수영장',
    '스포츠',
    '레저',
    '볼링장',
    '공원',
    '도시근린공원',
    '오락실',
    '보드카페',
    '방탈출카페',
    '테마카페',
    '테마파크',
    '복합문화공간',
    '공연장',
    '관람',
    '체험',
    '전시관',
    '도서관',
    '북카페',
    '미술',
    '공예',
    '식물원',
    '고궁',
    '궁',
    '백화점',
    '스포츠의류',
    '코인노래방',
    '서바이벌게임',
    '롤러',
    '인라인스케이트장',
    '라이브카페',
    '농구장',
  ]),
};

const interestsConfig = [
  {
    emoji: <ActiveSvg />,
    value: 'active',
    label: '활동적인',
    categories: new Set([
      '당구장',
      '배드민턴',
      '클라이밍',
      '스크린골프',
      'PC방',
      '수영장',
      '스포츠',
      '레저',
      '볼링장',
      '공원',
      '도시근린공원',
    ]),
  },
  {
    emoji: <RomanticSvg />,
    value: 'romantic',
    label: '로맨틱한',
    categories: new Set(['백화점', '코인노래방', '식물원', '공원']),
  },
  {
    emoji: <ExoticSvg />,
    value: 'exotic',
    label: '이국적인',
    categories: new Set([
      '오락실',
      '보드카페',
      '방탈출카페',
      '테마카페',
      '테마파크',
      '복합문화공간',
      '공연장',
      '관람',
    ]),
  },
  {
    emoji: <TrendySvg />,
    value: 'd',
    label: '트렌디한 ',
    categories: new Set(['클라이밍', '방탈출', '테마카페', '서바이벌']),
  },
  {
    emoji: <ContemplativeSvg />,
    value: 'contemplative',
    label: '사색적인',
    categories: new Set([
      '전시관',
      '도서관',
      '북카페',
      '미술',
      '공예',
      '식물원',
      '공원',
    ]),
  },
  {
    emoji: <RetroSvg />,
    value: 'retro',
    label: '복고풍의',
    categories: new Set([
      '롤러',
      '인라인스케이트장',
      '라이브카페',
      '고궁',
      '궁',
    ]),
  },
  {
    emoji: <ChallengingSvg />,
    value: 'challenging',
    label: '도전적인',
    categories: new Set(['클라이밍', '스크린골프', '서바이벌게임', '볼링장']),
  },
];

const distanceConfig = [
  {
    id: 'under 250',
    distance: 250,
    label: '250m 이내',
    zoomLevel: 5,
  },
  {
    id: 'under 500',
    distance: 500,
    label: '500m 이내',
    zoomLevel: 6,
  },
  {
    id: 'under 1000',
    distance: 1000,
    label: '1km 이내',
    zoomLevel: 7,
  },
  {
    id: 'over 1000',
    distance: 2000,
    label: '1km 이상',
    zoomLevel: 8,
  },
];

const initialState = {
  isWithOther: null,
  selectedInterests: [],
  transportation: null,
  allInterests: interestsConfig,
  distanceConfigIndex: 0,
  distanceConfig,
  modeConfig,
  trigger: -1,
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

    case SELECT_DISTANCE: {
      return {
        ...state,
        distanceConfigIndex: action.payload,
      };
    }

    case INIT: {
      return {
        ...initialState,
      };
    }

    case 'trigger': {
      return {
        ...state,
        trigger: state.trigger * -1,
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
      distanceConfigIndex,
      allInterests,
      distanceConfig,
      modeConfig,
      trigger,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <OnboardingContext.Provider
      value={{
        isWithOther,
        selectedInterests,
        transportation,
        distanceConfigIndex,
        distanceConfig,
        dispatch,
        allInterests,
        modeConfig,
        trigger,
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
