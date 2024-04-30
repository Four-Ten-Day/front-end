import BottomSheet from '@/components/common-ui/bottom-sheet';
import { NextPageWithLayout } from '../_app';
import Button from '@/components/common-ui/button';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import InterestSelector from '@/components/features/interest/interest-selector';

const Interest: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-h1 text-center">어떤 기분을 느끼고 싶나요?</h1>

      <section className="flex justify-center">
        <InterestSelector />
      </section>
    </>
  );
};

Interest.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="mb-[72px]">
        <Ellipsis current={2} total={3} />
      </div>

      <div className="flex flex-col gap-16 px-5 w-full">{page}</div>

      <BottomSheet>
        <Button href={'/'} size="L" variant="contained">
          선택완료
        </Button>
      </BottomSheet>
    </>
  );
};

export default Interest;
