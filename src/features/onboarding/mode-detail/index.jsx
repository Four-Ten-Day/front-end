import ProgressiveForm from '../../../ui/progressive-form';
import { ButtonGroup } from '../../../ui/button-group';

import AloneButton from './alone-button';
import TogetherButton from './together-button';
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
          selected={isWithOther !== null}
        >
          선택 완료
        </ProgressiveForm.NextButton>
      </ProgressiveForm>
    </>
  );
}
export default ModeDetail;
