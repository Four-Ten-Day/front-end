import * as S from './styles';

type EllipsisProps = {
  current: number;
  total: number;
};

const Ellipsis = ({ current, total }: EllipsisProps) => {
  const ellipsis = [...new Array(total)].map((_, idx) => (
    <S.Dot key={idx} isActive={idx + 1 <= current} />
  ));

  return <S.Ellipsis>{ellipsis}</S.Ellipsis>;
};

export default Ellipsis;
