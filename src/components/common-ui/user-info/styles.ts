import { breakpoints } from '@/styles/theme';
import styled from '@emotion/styled';
import Image from 'next/image';

export const UserInfo = styled.div`
  position: fixed;
  text-align: end;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 8px 20px;
  width: 100%;
  max-width: ${breakpoints.xs};
`;

export const UserImage = styled(Image)`
  border-radius: 100%;
`;
