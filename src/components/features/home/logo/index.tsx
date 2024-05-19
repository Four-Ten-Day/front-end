import Image from 'next/image';
import * as S from './styles';

export default function Logo() {
  return (
    <S.Header>
      <Image
        src={'/images/logo.webp'}
        alt="오놀 로고"
        width={56}
        height={56}
        unoptimized
        priority
      />
    </S.Header>
  );
}
