import { createPortal } from 'react-dom';
import * as S from './styles';

function BackgroundWallpapers() {
  return createPortal(<S.BackgroundWallPapers />, document.body);
}
export default BackgroundWallpapers;
