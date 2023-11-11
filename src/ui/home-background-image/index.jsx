import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import animationData from '../../../public/home-animation.json';
import * as S from './styles';

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animationData,
      });

      anim.setSpeed(0.5);

      return () => anim.destroy();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <S.AnimationContainer ref={animationContainer} />;
};

export default LottieAnimation;
