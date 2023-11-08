import React, { useState, useCallback } from 'react';
import useWindowSize from '../../../../hooks/useWindowSize';
import * as S from './styles';

const Slider = ({ distanceConfig, onDistanceChange }) => {
  const [value, setValue] = useState(0);
  const maxValue = (distanceConfig.length - 1) * 1000;
  const { width: windowWidth } = useWindowSize();

  const calculatePosition = (index) => {
    const position = 20 + ((windowWidth - 40 - 32 - 32) / 3) * index;

    if (index === 0) return position - 4;
    if (index === distanceConfig.length - 1) return position + 4;

    return position;
  };

  const handleMouseUp = useCallback(() => {
    const closest = distanceConfig.reduce((prevIdx, _, idx) => {
      return Math.abs(idx * 1000 - value) < Math.abs(prevIdx * 1000 - value)
        ? idx
        : prevIdx;
    }, 0);

    setValue(closest * 1000);
    onDistanceChange(closest);
  }, [value, distanceConfig]);

  return (
    <S.SliderContainer>
      {distanceConfig.map((option, index) => {
        const position = calculatePosition(index);
        return (
          <React.Fragment key={option.id}>
            <S.ChoiceCircle left={position} />
            <S.Label left={index ? position : position + 20}>
              {value / 1000 === index ? option.label : ''}
            </S.Label>
          </React.Fragment>
        );
      })}
      <S.Slider
        type="range"
        min={0}
        max={maxValue}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      />
    </S.SliderContainer>
  );
};

export default Slider;
