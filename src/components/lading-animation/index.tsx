import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

const LandingAnimation = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPlay(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Lottie
      className="absolute inset-0 w-full left-1/2 -translate-x-1/2 -z-10 overflow-hidden "
      path={'/landing-lottie.json'}
      play={play}
      loop={false}
      aria-hidden={true}
    />
  );
};
export default LandingAnimation;
