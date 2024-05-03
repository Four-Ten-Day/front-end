import { SELECTED_INTERESTS_KEY } from '@/lib/constants/local-storage-key';
import { atom } from 'recoil';
import { localStorageEffect } from '../effects/local-storage-effect';

export type InterestValue =
  | 'active'
  | 'romantic'
  | 'exotic'
  | 'trendy'
  | 'contemplative'
  | 'retro'
  | 'challenging';

type InterstLabel =
  | '활동적인'
  | '로맨틱한'
  | '이국적인'
  | '트렌디한'
  | '사색적인'
  | '복고풍의'
  | '도전적인';

type InterestFixture = {
  emojiPath: string;
  value: InterestValue;
  label: InterstLabel;
  categories: Set<string>;
};

// TODO: fixture selector로 뺀다? 아니면 그냥 둔다?
const interestFixtures: InterestFixture[] = [
  {
    emojiPath: '/images/interest-active.svg',
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
    emojiPath: '/images/interest-romantic.svg',
    value: 'romantic',
    label: '로맨틱한',
    categories: new Set(['백화점', '코인노래방', '식물원', '공원']),
  },
  {
    emojiPath: '/images/interest-exotic.svg',
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
    emojiPath: '/images/interest-trendy.svg',
    value: 'trendy',
    label: '트렌디한',
    categories: new Set(['클라이밍', '방탈출', '테마카페', '서바이벌']),
  },
  {
    emojiPath: '/images/interest-contemplative.svg',
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
    emojiPath: '/images/interest-retro.svg',
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
    emojiPath: '/images/interest-challenging.svg',
    value: 'challenging',
    label: '도전적인',
    categories: new Set(['클라이밍', '스크린골프', '서바이벌게임', '볼링장']),
  },
];

export const selectedInterestState = atom<InterestValue[]>({
  key: 'selectedInterestState',
  default: [],
  effects: [localStorageEffect<InterestValue[]>(SELECTED_INTERESTS_KEY)],
});

export const allInterestsState = atom<InterestFixture[]>({
  key: 'allInterestsState',
  default: interestFixtures,
});
