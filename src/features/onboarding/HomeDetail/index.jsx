import { Link } from 'react-router-dom';
import Row from '../../../ui/Row';
import * as S from './styles';
import Logo from '../../../ui/Logo';

function HomeDetail() {
  return (
    <>
      <Row type="vertical">
        <Logo />
        <S.Img src="/public/logo.webp" />
        <span>오늘 뭐하고 놀지?</span>
        <Link to="/mode">추천 받기</Link>
      </Row>
    </>
  );
}
export default HomeDetail;
