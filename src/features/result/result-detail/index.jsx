import { Link } from 'react-router-dom';
import Button from '../../../ui/button';
import Heading from '../../../ui/heading';

import Card from '../../../ui/backdrop-card';

import ResultBackGround from './result-background';
import * as S from './styles';
import { INIT, useOnboarding } from '../../../contexts/OnboardingContext';

function ResultDetail({ category }) {
  const { dispatch } = useOnboarding();

  return (
    <>
      <Card>
        <S.Image url="/result-movie.svg" />

        <S.ResultTextBox>
          <S.Span>오늘은..</S.Span>
          <Heading as="h1">{category}</Heading>
          <S.Span>어때요?</S.Span>
        </S.ResultTextBox>

        <S.ButtonRow>
          <Button
            as={Link}
            to="/mode"
            size="small"
            variations="quaternary"
            onClick={() => dispatch({ type: INIT })}
          >
            처음으로 돌아갈래요
          </Button>
          <Button
            size="small"
            variations="ternary"
            onClick={() => dispatch({ type: 'trigger' })}
          >
            다시 추천 받을래요
          </Button>
        </S.ButtonRow>
      </Card>

      <S.Spacer />

      <ResultBackGround />
    </>
  );
}
export default ResultDetail;
