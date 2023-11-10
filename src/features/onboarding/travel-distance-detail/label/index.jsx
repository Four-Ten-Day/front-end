import { useOnboarding } from '../../../../contexts/OnboardingContext';
import * as S from './styles';

function Label() {
  const { distanceConfig, distanceConfigIndex } = useOnboarding();
  const { label } = distanceConfig[distanceConfigIndex];

  return (
    <S.Div>
      <S.ColorSpan>{label}</S.ColorSpan> 이동 가능해요
    </S.Div>
  );
}
export default Label;
