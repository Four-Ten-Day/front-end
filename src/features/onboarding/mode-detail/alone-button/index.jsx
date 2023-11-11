import {
  CLICK_ALONE,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import { ReactComponent as AloneSvg } from '../../../../../public/alone-v2.svg';
import ButtonIcon from '../../../../ui/button-icon';

function AloneButton() {
  const { isWithOther, dispatch } = useOnboarding();

  function handleClick() {
    dispatch({ type: CLICK_ALONE });
  }

  return (
    <ButtonIcon
      selected={isWithOther === false}
      onClick={handleClick}
      size="large"
    >
      <AloneSvg />
      <span style={{ fontSize: '1.8rem', whiteSpace: 'nowrap' }}>
        혼자 놀거에요
      </span>
    </ButtonIcon>
  );
}
export default AloneButton;
