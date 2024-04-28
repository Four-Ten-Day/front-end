import dynamic from 'next/dynamic';

const Lottie = dynamic(
  () => import('react-lottie-player').then((mod) => mod.default),
  {
    ssr: false,
  }
);

const LandingAnimation = () => {
  return (
    <Lottie
      className="absolute inset-0 -z-10"
      path={'/landing-lottie.json'}
      play={true}
      loop={false}
    />
  );
};

export default LandingAnimation;
