import { useEffect, useState } from 'react';
import * as S from './styles';

const LandingAnimation = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPlay(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Lottie
      path={'/lotties/landing-lottie.json'}
      play={play}
      loop={false}
      aria-hidden={true}
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  );
};

export default LandingAnimation;
