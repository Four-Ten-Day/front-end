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
        style={{ padding: '1.2rem 2.4rem', fontSize: '1.8rem' }}
        selected={selectedInterests.length === allInterests.length}
        onClick={handleSelectAllInterests}
        rounded
      >
        전체 선택
      </Button>
      {allInterests.map(({ value, label }) => (
        <Button
          style={{ padding: '1.2rem 2.4rem', fontSize: '1.8rem' }}
          key={value}
          selected={selectedInterests.includes(value)}
          onClick={() => handleSelectInterest(value)}
          rounded
        >
          {label}
        </Button>
      ))}
    </WrapBox>
  );
}
export default InterestBox;
