import { createPortal } from 'react-dom';
import * as S from './styles';

import { ReactComponent as FakeLoader1 } from '../../../public/fake-loader-1.svg';
import { ReactComponent as FakeLoader2 } from '../../../public/fake-loader-2.svg';
import { ReactComponent as FakeLoader3 } from '../../../public/fake-loader-3.svg';
import { ReactComponent as FakeLoader4 } from '../../../public/fake-loader-4.svg';
import { useEffect, useState } from 'react';
import Heading from '../../ui/Heading';
import { delay } from '../../utils/delay';

const icons = [
  <FakeLoader1 />,
  <FakeLoader2 />,
  <FakeLoader3 />,
  <FakeLoader4 />,
];

function FakeLoader({ loadingTime }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => (prev === icons.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    (async function () {
      await delay(loadingTime);
      setIsLoading(false);
    })();
  }, [loadingTime]);

  if (!isLoading) return <></>;

  return createPortal(
    <S.Wrapper>
      {icons[imageIndex]}
      <Heading
        as="h1"
        style={{ textAlign: 'left', width: '14.4rem', whiteSpace: 'nowrap' }}
      >
        랜덤 추천 중
        {[...Array.from({ length: imageIndex })]
          .map((_, tempIndex) => {
            if (tempIndex <= imageIndex) return '.';
            else return '';
          })
          .join('')}
      </Heading>
      <span>조금만 기다려 주세요 :)</span>
    </S.Wrapper>,
    document.body
  );
}
export default FakeLoader;
