import { createPortal } from 'react-dom';
import * as S from './styles';

function HomeBackgroundImage() {
  return createPortal(<S.HomeBackgroundImage />, document.body);
}
export default HomeBackgroundImage;
