import * as S from './styles';

function PlaceCard({ place }) {
  const { place_name, road_address_name, distance } = place;

  return (
    <S.Card>
      <S.Img src="/public/alone-v2.svg" />
      <S.Title>{place_name}</S.Title>
      <S.Location>{road_address_name}</S.Location>
      <S.Distance>{distance}m</S.Distance>
    </S.Card>
  );
}
export default PlaceCard;
