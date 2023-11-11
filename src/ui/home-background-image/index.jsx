// import { createPortal } from 'react-dom';
// import * as S from './styles';

// function HomeBackgroundImage() {
//   return createPortal(<S.HomeBackgroundImage />, document.body);
// }
// export default HomeBackgroundImage;

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import animationData from '../../../public/home-animation.json';
import { createPortal } from 'react-dom';

// 스타일드 컴포넌트 생성
const StyledAnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

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
    <StyledAnimationContainer ref={animationContainer} />,
    document.body
  );
};

export default LottieAnimation;
