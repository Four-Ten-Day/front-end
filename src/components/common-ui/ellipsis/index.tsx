import { VisuallyHidden } from '../visually-hidden';
import * as S from './styles';

type EllipsisProps = {
  current: number;
  total: number;
};

const Ellipsis = ({ current, total }: EllipsisProps) => {
  const ellipsis = [...new Array(total)].map((_, idx) => (
    <S.Dot key={idx} isActive={idx + 1 <= current} />
  ));

  return (
    <>
      <S.Ellipsis>{ellipsis}</S.Ellipsis>
      <VisuallyHidden>{`총 ${total}페이지 중 ${current}페이지입니다.`}</VisuallyHidden>
    </>
  );
};

export default Ellipsis;
