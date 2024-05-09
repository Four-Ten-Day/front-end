import Button from '@/components/common-ui/button';
import { getModePagePath } from '@/lib/utils/paths';
import { selectedDistanceState } from '@/store/distance/atom';
import { selectedInterestState } from '@/store/interest/atom';
import { selectedModeState } from '@/store/mode/atom';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import * as S from './styles';
import { CategoryWithPlaces } from '@/services/get-place-info';

type CategoryProps = {
  place: CategoryWithPlaces | undefined;
  popPlace: () => void;
};

const Category = ({ place, popPlace }: CategoryProps) => {
  const router = useRouter();
  const resetSelectedMode = useResetRecoilState(selectedModeState);
  const resetSelectedInterests = useResetRecoilState(selectedInterestState);
  const resetSelectedDistance = useResetRecoilState(selectedDistanceState);

  const handleClickGoBack = () => {
    resetSelectedDistance();
    resetSelectedInterests();
    resetSelectedMode();
    router.push(getModePagePath());
  };

  const handleClickAgain = () => {
    popPlace();
  };

  return (
    <S.Category>
      <S.BackgroundImage
        src={'/images/result-background.svg'}
        alt="백그라운드"
        width={393}
        height={452}
      />
      <S.BackgroundImage
        src={'/images/result-background-down.svg'}
        alt="백그라운드"
        width={393}
        height={567}
      />
      <S.Card>
        <Image
          src={'/images/category.svg'}
          alt="카테고리"
          width={313}
          height={200}
        />

        {place ? (
          <S.CategoryTitle>
            <S.Subtitle>오늘은..</S.Subtitle>
            <S.Title>{place.category}</S.Title>
            <S.Subtitle>어때요?</S.Subtitle>
          </S.CategoryTitle>
        ) : (
          <>
            <S.Subtitle>앗 추천 데이터가 없어요!</S.Subtitle>
            <S.Subtitle>좀 더 다양한 선택지를 골라보는건 어때요? 😊</S.Subtitle>
          </>
        )}

        <S.ButtonGroup>
          <Button size="S" variant="outlined" onClick={handleClickGoBack}>
            <S.ButtonSpan>처음으로 돌아갈래요</S.ButtonSpan>
          </Button>

          {place && (
            <Button size="S" variant="contained" onClick={handleClickAgain}>
              <S.ButtonSpan>다시 추천 받을래요</S.ButtonSpan>
            </Button>
          )}
        </S.ButtonGroup>
      </S.Card>
    </S.Category>
  );
};

export default Category;
