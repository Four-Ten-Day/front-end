import { boxShadow, breakpoints, colors } from '@/styles/theme';
import styled from '@emotion/styled';

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: ${boxShadow.topSm};
  padding: 28px 20px;
  width: 100%;
  max-width: ${breakpoints.xs};
  background-color: ${colors.primary06};
`;

export default BottomSheet;
