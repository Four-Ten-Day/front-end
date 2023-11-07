import ProgressiveForm from '../../../ui/ProgressiveForm';
import Map from './Map';

function TravelDistanceDetail() {
  return (
    <>
      <ProgressiveForm currentStep={3}>
        <ProgressiveForm.Elipse />
        <ProgressiveForm.Title>
          지금 내 위치에서 이동할 수 있는 거리를 알려주세요
        </ProgressiveForm.Title>
        <ProgressiveForm.Content>
          <Map />
        </ProgressiveForm.Content>
        <ProgressiveForm.NextButton to="/travel-distance">
          선택 완료
        </ProgressiveForm.NextButton>
      </ProgressiveForm>
    </>
  );
}
export default TravelDistanceDetail;
