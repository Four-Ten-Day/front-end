import { ReactComponent as BigEllipseSvg } from '../../../../../public/ellipse-big.svg';
import { ReactComponent as DarkBigEllipseSvg } from '../../../../../public/elipse-big-dark.svg';
import * as S from './styles';

function DistanceSlider({ distanceConfig, distanceIndex, onDistanceChange }) {
  console.log(distanceIndex);
  return (
    <S.Wrapper>
      {distanceConfig.map(({ id }, idx) => {
        if (idx === distanceIndex) {
          return <DarkBigEllipseSvg key={id} />;
        }

        return <BigEllipseSvg key={id} onClick={() => onDistanceChange(idx)} />;
      })}

      <S.Spacer />
    </S.Wrapper>
  );
}
export default DistanceSlider;
