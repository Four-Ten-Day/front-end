import { borderRadius, colors, fontSize } from '@/styles/theme';
import styled from '@emotion/styled';
import * as RadixSlider from '@radix-ui/react-slider';

export const Slider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Root = styled(RadixSlider.Root)`
  display: flex;

  width: 100%;
  height: 16px;
  position: relative;
  align-items: center;
`;

export const Track = styled(RadixSlider.Track)`
  background-color: ${colors.primary05};
  position: relative;
  flex-grow: 1;
  border-radius: ${borderRadius.large};
  height: 4px;
`;

export const Range = styled(RadixSlider.Range)`
  background-color: ${colors.primary05};
  position: absolute;
  border-radius: ${borderRadius.large};
  height: 100%;
`;

export const Thumb = styled(RadixSlider.Thumb)`
  display: block;
  width: 32px;
  height: 32px;
  background-color: ${colors.primary01};
  border-radius: ${borderRadius.large};
`;

export const ValueContainer = styled.div`
  position: absolute;
  top: 50%;
  z-index: -10;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Value = styled.div`
  background-color: ${colors.primary05};
  height: 24px;
  width: 24px;
  border-radius: ${borderRadius.large};
  cursor: pointer;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Label = styled.span<{ isVisible: boolean }>`
  font-size: ${fontSize.b4};
  color: ${colors.primary03};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
