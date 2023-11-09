import { useState } from 'react';
import ProgressiveForm from '../../../ui/ProgressiveForm';
import Row from '../../../ui/Row';
import Map from './Map';

import * as S from './styles';

import Slider from './slider';
import { useOnboarding } from '../../../contexts/OnboardingContext';

function TravelDistanceDetail() {
  const { distanceConfig, distanceConfigIndex } = useOnboarding();
  const { label } = distanceConfig[distanceConfigIndex];

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
            <Map />
            <S.Div>
              <S.ColorSpan>{label}</S.ColorSpan> 이동 가능해요
            </S.Div>
            <Slider />
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
