import styled from 'styled-components';
import { ReactComponent as WallPapers } from '../../../public/wallpapers.svg';

export const HomeBackgroundImage = styled(WallPapers)`
  position: fixed;
  bottom: 0;

  left: 50%;
  transform: translateX(-50%);

  z-index: -1;
`;
