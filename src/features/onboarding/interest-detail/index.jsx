import { useOnboarding } from '../../../contexts/OnboardingContext';
import ProgressiveForm from '../../../ui/progressive-form';
import InterestBox from './interest-box';

function InterestDetail() {
  const { selectedInterests } = useOnboarding();
  const selected = selectedInterests.length > 0;

  return (
    <ProgressiveForm currentStep={2}>
      <ProgressiveForm.Elipse />
      <ProgressiveForm.Title>어떤 기분을 느끼고 싶나요?</ProgressiveForm.Title>
      <ProgressiveForm.Content>
        <InterestBox />
      </ProgressiveForm.Content>
      <ProgressiveForm.NextButton
        to="/travel-distance"
        disabled={!selected}
        selected={selected}
      >
        선택 완료
      </ProgressiveForm.NextButton>
    </ProgressiveForm>
  );
}
export default InterestDetail;
