import * as S from './styles';

function PlaceCard({ place }) {
  console.log(place);
  const { place_name, road_address_name, distance, category_group_name } =
    place;

  return (
    <S.Card>
      <S.Row>
        <S.Title>{place_name}</S.Title>
        <S.GroupName>{category_group_name}</S.GroupName>
      </S.Row>
      <S.Location>{road_address_name}</S.Location>
      <S.Distance>{distance}m</S.Distance>
      <S.Chevron />
    </S.Card>
  );
}
export default PlaceCard;
