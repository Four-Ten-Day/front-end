import * as S from './styles';

function PlaceCard() {
  return (
    <S.Card>
      <S.Img src="/public/alone-v2.svg" />
      <S.Title>CGV 강남</S.Title>
      <S.Location>서울 강남구 강남대로</S.Location>
      <S.Distance>500m</S.Distance>
    </S.Card>
  );
}
export default PlaceCard;
