import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import animationData from '../../../public/home-animation.json';
import { createPortal } from 'react-dom';
import * as S from './styles';

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    anim.setSpeed(0.5);

    return () => anim.destroy();
  }, []);

  return createPortal(
    <S.AnimationContainer ref={animationContainer} />,
    document.body
  );
};

export default LottieAnimation;
