import DistanceCircleMap from '../../features/onboarding/travel-distance-detail/distance-circle-map';
import Label from '../../features/onboarding/travel-distance-detail/label';
import Slider from '../../features/onboarding/travel-distance-detail/slider';
import ProgressiveForm from '../../ui/progressive-form';
import Row from '../../ui/row';

function TravelDistance() {
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
            <DistanceCircleMap />
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
export default TravelDistance;
