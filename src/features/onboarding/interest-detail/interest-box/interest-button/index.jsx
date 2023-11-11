import {
  SELECT_INTERESTS,
  useOnboarding,
} from '../../../../../contexts/OnboardingContext';
import ButtonIcon from '../../../../../ui/button-icon';

function InterestButton({ value, label, emoji }) {
  const { dispatch, selectedInterests } = useOnboarding();

  function handleSelectInterest(payload) {
    dispatch({ type: SELECT_INTERESTS, payload });
  }

  return (
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
  );
}
export default InterestButton;
