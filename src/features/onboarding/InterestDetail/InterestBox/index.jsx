import {
  SELECT_ALL_INTERSTS,
  SELECT_INTERESTS,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import { ButtonIcon } from '../../../../ui/ButtonIcon';
import * as S from './styles';

import { ReactComponent as AllSvg } from '../../../../../public/interest-all.svg';

function InterestBox() {
  const { dispatch, selectedInterests, allInterests } = useOnboarding();

  function handleSelectAllInterests() {
    dispatch({ type: SELECT_ALL_INTERSTS });
  }

  function handleSelectInterest(payload) {
    dispatch({ type: SELECT_INTERESTS, payload });
  }

  return (
    <S.Box>
      <ButtonIcon
        style={{ padding: '1.2rem 2.4rem', fontSize: '1.8rem' }}
        selected={selectedInterests.length === allInterests.length}
        onClick={handleSelectAllInterests}
        size="small"
      >
        <AllSvg />
        <span>전체 선택</span>
      </ButtonIcon>
      {allInterests.map(({ value, label, emoji }) => (
        <ButtonIcon
          style={{ padding: '1.2rem 2.4rem', fontSize: '1.8rem' }}
          key={value}
          selected={selectedInterests.includes(value)}
          onClick={() => handleSelectInterest(value)}
          size="small"
        >
          {emoji}
          <span>{label}</span>
        </ButtonIcon>
      ))}
    </S.Box>
  );
}
export default InterestBox;
