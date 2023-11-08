import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  height: 3.2rem;
  width: 100%;
  margin-top: 1.6rem;
`;

export const Slider = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  -webkit-appearance: none;
  width: calc(100% - 3.2rem);
  height: 0.4rem;
  background: var(--color-M_05);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;

    width: 3.2rem;
    height: 3.2rem;

    background: var(--color-M_01);

    cursor: pointer;

    border-radius: 50%;
    position: relative;
    filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.35));
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 3.2rem;
    height: 3.2rem;

    background: var(--color-M_01);
    filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.35));
    cursor: pointer;

    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
`;

export const ChoiceCircle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.left}px;

  width: 2.4rem;
  height: 2.4rem;
  background: var(--color-M_05);
  border-radius: 50%;
  z-index: -1;
`;

export const Label = styled.div`
  position: absolute;
  top: 4.4rem;
  left: ${(props) => props.left}px;
  transform: translateX(-25%);
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-M_03);
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  white-space: nowrap;
`;
