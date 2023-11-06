import ProgressiveForm from '../../../ui/ProgressiveForm';
import { ButtonGroup } from '../../../ui/ButtonGroup/index.jsx';

import AloneButton from './AloneButton.jsx';
import TogetherButton from './TogetherButton.jsx';
import { useOnboarding } from '../../../contexts/OnboardingContext.jsx';

function ModeDetail() {
  const { isWithOther } = useOnboarding();

  return (
    <>
      <ProgressiveForm currentStep={1}>
        <ProgressiveForm.Elipse />
        <ProgressiveForm.Title>
          오늘은 혼자 놀기? 같이 놀기?
        </ProgressiveForm.Title>
        <ProgressiveForm.Content>
          <ButtonGroup>
            <AloneButton />
            <TogetherButton />
          </ButtonGroup>
        </ProgressiveForm.Content>
        <ProgressiveForm.NextButton
          to="/interest"
          disabled={isWithOther === null}
        >
          선택 완료
        </ProgressiveForm.NextButton>
      </ProgressiveForm>
    </>
  );
}
export default ModeDetail;
