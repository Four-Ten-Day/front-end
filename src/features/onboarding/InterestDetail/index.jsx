import { useNavigate } from 'react-router-dom';
import {
  ANSWER_INTERESTS,
  useOnboarding,
} from '../../../contexts/OnboardingContext';
import Button from '../../../ui/Button';
import WrapBox from '../../../ui/WrapBox';
import * as S from './styles';
import ProgressiveForm from '../../../ui/ProgressiveForm';

const items = [
  {
    value: 'a',
    label: '이색적인',
  },
  {
    value: 'b',
    label: '활동',
  },
  {
    value: 'c',
    label: '매우매우 정적인',
  },
  {
    value: 'd',
    label: '긴글자를 넣었을때 레이아웃이 흐르도록',
  },
  {
    value: 'e',
    label: '짧',
  },
  {
    value: 'f',
    label: '이런것두',
  },
];

function InterestDetail() {
  const { dispatch, selectedInterests } = useOnboarding();
  const navigate = useNavigate();

  function handleChoiceInterests(payload) {
    dispatch({ type: ANSWER_INTERESTS, payload });
  }

  function handleChoiceComplete() {
    navigate('/travel-distance');
  }

  // TODO: Header에 totalSteps 매직넘버 제거
  return (
    <>
      <ProgressiveForm>
        <ProgressiveForm.Header totalSteps="3" />
        <ProgressiveForm.Title title="오늘은 무엇을 느끼고 싶나요?" />
        <ProgressiveForm.Content>
          <WrapBox>
            {items.map(({ value, label }) => (
              <S.InterestButton
                key={value}
                selected={selectedInterests.includes(value)}
                onClick={() => handleChoiceInterests(value)}
              >
                {label}
              </S.InterestButton>
            ))}
          </WrapBox>
          <Button onClick={() => handleChoiceComplete()}>선택 완료</Button>
        </ProgressiveForm.Content>
      </ProgressiveForm>
    </>
  );
}
export default InterestDetail;
