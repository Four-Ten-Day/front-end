import { selectedDistanceFixtureState } from '@/store/distance/selectors';
import { useRecoilValue } from 'recoil';
import * as S from './styles';

const Label = () => {
  const { label } = useRecoilValue(selectedDistanceFixtureState);

  return (
    <S.Label role="status">
      <S.Span>{label}</S.Span> 이동 가능해요!
    </S.Label>
  );
};
export default Label;
