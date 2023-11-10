import {
  SELECT_ALL_INTERSTS,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import { ButtonIcon } from '../../../../ui/button-icon';
import * as S from './styles';
import { ReactComponent as AllSvg } from '../../../../../public/interest-all.svg';
import InterestButton from './interest-button';

function InterestBox() {
  const { dispatch, selectedInterests, allInterests } = useOnboarding();

  function handleSelectAllInterests() {
    dispatch({ type: SELECT_ALL_INTERSTS });
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
        <InterestButton value={value} label={label} emoji={emoji} />
      ))}
    </S.Box>
  );
}
export default InterestBox;
