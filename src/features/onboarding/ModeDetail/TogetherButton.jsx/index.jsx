import {
  CLICK_TOGETHER,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import { ButtonIcon } from '../../../../ui/ButtonIcon';
import { ReactComponent as TogetherSvg } from '../../../../../public/together-v2.svg';

function TogetherButton() {
  const { isWithOther, dispatch } = useOnboarding();

  function handleClick() {
    dispatch({ type: CLICK_TOGETHER });
  }

  return (
    <ButtonIcon selected={isWithOther === true} onClick={handleClick}>
      <TogetherSvg />
      <span style={{ fontSize: '1.8rem', whiteSpace: 'nowrap' }}>
        같이 놀거에요
      </span>
    </ButtonIcon>
  );
}
export default TogetherButton;
