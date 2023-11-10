import styled from 'styled-components';
import { ReactComponent as Logo1Svg } from '../../../../../public/result-logo-1.svg';
import { ReactComponent as Logo2Svg } from '../../../../../public/result-logo-2.svg';
import { ReactComponent as Logo3Svg } from '../../../../../public/result-logo-3.svg';
import { ReactComponent as Logo4Svg } from '../../../../../public/result-logo-4.svg';

export const Logo1 = styled(Logo1Svg)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Logo2 = styled(Logo2Svg)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const Logo3 = styled(Logo3Svg)`
  position: absolute;
  top: 26.8rem;
  left: 0;
  z-index: 1;
`;

export const Logo4 = styled(Logo4Svg)`
  position: absolute;
  top: 39.9rem;
  right: 0;
  z-index: -1;
`;
