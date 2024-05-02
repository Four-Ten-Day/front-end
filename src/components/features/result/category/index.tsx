import Button from '@/components/common-ui/button';
import { resultPlaceState } from '@/store/result/selectors';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

const Category = () => {
  const resultPlace = useRecoilValue(resultPlaceState);

  // TODO: 없을 경우 디자인 하기
  if (!resultPlace) return null;

  return (
    <div className="flex justify-center w-full h-[600px] relative">
      <Image
        src={'/images/result-background.svg'}
        alt="백그라운드"
        width={393}
        height={452}
        className="absolute z-10"
      />
      <Image
        src={'/images/result-background-down.svg'}
        alt="백그라운드"
        width={393}
        height={567}
        className="absolute -z-10"
      />
      <div className="flex flex-col gap-6 justify-center items-center p-5 rounded-3xl bg-white/20 shadow-[0_0_20px_0_rgba(0,0,0,0.2)] backdrop-blur-[10px] w-[353px] h-fit mt-16">
        <Image
          src={'/images/category.svg'}
          alt="카테고리"
          width={313}
          height={200}
        />

        <h1 className="flex flex-col  justify-center items-center gap-4">
          <span className="text-b3 font-nanum-gothic text-primary-02 font-bold">
            오늘은..
          </span>
          <span className="text-h1 text-primary-01">
            {resultPlace.category}
          </span>
          <span className="text-b3 font-nanum-gothic text-primary-02 font-bold">
            어때요?
          </span>
        </h1>

        <div className="flex justify-center items-center gap-2">
          <Button size="S" variant="outlined">
            <span className="font-normal text-h4">처음으로 돌아갈래요</span>
          </Button>
          <Button size="S" variant="contained">
            <span className="font-normal text-h4">다시 추천 받을래요</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
