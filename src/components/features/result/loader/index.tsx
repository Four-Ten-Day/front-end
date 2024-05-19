import Image from 'next/image';
import * as S from './styles';
import { useEffect, useState } from 'react';

const images = [
  '/images/loader-1.webp',
  '/images/loader-2.webp',
  '/images/loader-3.webp',
  '/images/loader-4.webp',
];

const Loader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Wrapper>
      <Image
        src={images[index]}
        width={136}
        height={136}
        alt=""
        aria-hidden={false}
      />
      <S.TextWrapper>
        <S.HeaderWrapper>
          <S.Heading>랜덤 추천 중</S.Heading>
          <S.dot>
            {Array.from({ length: images.length }).map((_, i) =>
              i <= index ? '.' : ' '
            )}
          </S.dot>
        </S.HeaderWrapper>
        <S.Span>조금만 기다려 주세요 :)</S.Span>
      </S.TextWrapper>
    </S.Wrapper>
  );
};
export default Loader;
