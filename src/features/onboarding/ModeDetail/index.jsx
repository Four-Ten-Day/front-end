import { useNavigate } from 'react-router-dom';
import {
  ANSWER_WITH_OTEHR_PEOPLE,
  useOnboarding,
} from '../../../contexts/OnboardingContext';
import Button from '../../../ui/Button';
import Row from '../../../ui/Row';
import ProgressiveForm from '../../../ui/ProgressiveForm';

function ModeDetail() {
  const { dispatch } = useOnboarding();
  const navigate = useNavigate();

  function handleChoiceMode(payload) {
    dispatch({ type: ANSWER_WITH_OTEHR_PEOPLE, payload });
    navigate('/interest');
  }

  // TODO: Header totalSteps 매직넘버 제거
  return (
    <>
      <ProgressiveForm>
        <ProgressiveForm.Header totalSteps="3" />
        <ProgressiveForm.Title title="오늘 뭐하고 놀지?" />
        <ProgressiveForm.Content>
          <Row>
            <Button onClick={() => handleChoiceMode(false)}>
              혼자 놀거에요
            </Button>
            <Button onClick={() => handleChoiceMode(true)}>
              같이 놀거에요
            </Button>
          </Row>
        </ProgressiveForm.Content>
      </ProgressiveForm>
      );
    </>
  );
}
export default ModeDetail;
