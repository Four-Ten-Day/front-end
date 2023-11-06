import {
  CLICK_ALONE,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import * as S from './styles';

function AloneButton() {
  const { isWithOther, dispatch } = useOnboarding();

  function handleClick() {
    dispatch({ type: CLICK_ALONE });
  }

  return (
    <S.AloneButton selected={isWithOther === false} onClick={handleClick} />
  );
}
export default AloneButton;
