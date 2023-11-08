import { useState } from 'react';
import ProgressiveForm from '../../../ui/ProgressiveForm';
import Row from '../../../ui/Row';
import Map from './Map';
import DistanceSlider from './slider';
import * as S from './styles';

const distanceConfig = [
  {
    id: 'under 250',
    distance: 250,
    label: '250m 이내',
  },
  {
    id: 'under 500',
    distance: 500,
    label: '500m 이내',
  },
  {
    id: 'under 1000',
    distance: 1000,
    label: '1km 이내',
  },
  {
    id: 'over 1000',
    distance: 2000,
    label: '1km 이상',
  },
];

function TravelDistanceDetail() {
  const [distanceIndex, setDistanceIndex] = useState(0);
  const { label, distance } = distanceConfig[distanceIndex];

  function handleDistanceChange(idx) {
    setDistanceIndex(idx);
  }

  return (
    <>
      <ProgressiveForm currentStep={3}>
        <ProgressiveForm.Elipse />
        <ProgressiveForm.Title>
          지금 내 위치에서
          <br /> 이동할 수 있는 거리를 알려주세요
        </ProgressiveForm.Title>
        <ProgressiveForm.Content>
          <Row type="vertical">
            <Map distance={distance} />
            <S.Div>
              <S.ColorSpan>{label}</S.ColorSpan> 이동 가능해요
            </S.Div>
            <DistanceSlider
              distanceConfig={distanceConfig}
              distanceIndex={distanceIndex}
              onDistanceChange={handleDistanceChange}
            />
          </Row>
        </ProgressiveForm.Content>
        <ProgressiveForm.NextButton to="/result" selected>
          선택 완료
        </ProgressiveForm.NextButton>
      </ProgressiveForm>
    </>
  );
}
export default TravelDistanceDetail;
