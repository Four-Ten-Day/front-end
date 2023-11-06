import { useOnboarding } from '../../../contexts/OnboardingContext';
import ProgressiveForm from '../../../ui/ProgressiveForm';
import InterestBox from './InterestBox';

function InterestDetail() {
  const { totalQuestions, selectedInterests } = useOnboarding();

  return (
    <>
      <ProgressiveForm currentStep={2} totalSteps={totalQuestions}>
        <ProgressiveForm.Elipse />
        <ProgressiveForm.Title>
          어떤 기분을 느끼고 싶나요?
        </ProgressiveForm.Title>
        <ProgressiveForm.Content>
          <InterestBox />
        </ProgressiveForm.Content>
        <ProgressiveForm.NextButton
          to="/travel-distance"
          disabled={selectedInterests.length === 0}
          selected={selectedInterests.length !== 0}
        >
          선택 완료
        </ProgressiveForm.NextButton>
      </ProgressiveForm>
    </>
  );
}
export default InterestDetail;
