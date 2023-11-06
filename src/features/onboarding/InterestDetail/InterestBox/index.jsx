import {
  SELECT_ALL_INTERSTS,
  SELECT_INTERESTS,
  useOnboarding,
} from '../../../../contexts/OnboardingContext';
import Button from '../../../../ui/Button';
import WrapBox from '../../../../ui/WrapBox';

function InterestBox() {
  const { dispatch, selectedInterests, allInterests } = useOnboarding();

  function handleSelectAllInterests() {
    dispatch({ type: SELECT_ALL_INTERSTS });
  }

  function handleSelectInterest(payload) {
    dispatch({ type: SELECT_INTERESTS, payload });
  }

  return (
    <WrapBox>
      <Button
        selected={selectedInterests.length === allInterests.length}
        onClick={handleSelectAllInterests}
      >
        전체 선택
      </Button>
      {allInterests.map(({ value, label }) => (
        <Button
          key={value}
          selected={selectedInterests.includes(value)}
          onClick={() => handleSelectInterest(value)}
        >
          {label}
        </Button>
      ))}
    </WrapBox>
  );
}
export default InterestBox;
