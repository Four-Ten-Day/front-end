import Row from '../../../ui/Row';

function TravelDistanceDetail() {
  return (
    <>
      <Row>
        <span>1 / 3</span>
      </Row>
      <Row>
        <span>
          지금 내 위치에서
          <br /> 이동 가능한 거리를 알려주세요
        </span>
      </Row>
      <input type="range" min="10" max="60" step="10" />
    </>
  );
}
export default TravelDistanceDetail;
