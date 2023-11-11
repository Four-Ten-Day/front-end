import * as S from './styles';

function PlaceCard({ place }) {
  const { place_name, road_address_name, distance } = place;

  return (
    <S.Card>
      <S.Title>{place_name}</S.Title>
      <S.Location>{road_address_name}</S.Location>
      <S.Distance>{distance}m</S.Distance>
      <S.Chevron />
    </S.Card>
  );
}
export default PlaceCard;
