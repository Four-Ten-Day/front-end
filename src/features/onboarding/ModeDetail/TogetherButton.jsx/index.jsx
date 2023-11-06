import {
  CLICK_TOGETHER,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import * as S from './styles';

function TogetherButton() {
  const { isWithOther, dispatch } = useOnboarding();

  function handleClick() {
    dispatch({ type: CLICK_TOGETHER });
  }

  return (
    <S.TogetherButton selected={isWithOther === true} onClick={handleClick} />
  );
}
export default TogetherButton;
