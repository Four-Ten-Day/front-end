import * as S from './styles';

const MessageSection = () => {
  return (
    <S.Section>
      <S.Header>
        <S.AnimatedMessage delay="1s">
          오늘 뭐하고 놀지 고민되나요?
        </S.AnimatedMessage>
        <S.AnimatedMessage delay="2s">
          오놀이 랜덤으로 추천해줄게요 :)
        </S.AnimatedMessage>
      </S.Header>
    </S.Section>
  );
};

export default MessageSection;
