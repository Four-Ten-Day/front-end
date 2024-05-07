import Image from 'next/image';
import * as S from './styles';

export default function Logo() {
  return (
    <S.Header>
      <Image src="/images/logo.svg" alt="오놀 로고" width={44} height={40} />
    </S.Header>
  );
}
