import ProgressiveForm from '../../../ui/progressive-form';
import Row from '../../../ui/row';
import Map from './map';

import Slider from './slider';
import Label from './label';

function TravelDistanceDetail() {
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
            <Label />
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
