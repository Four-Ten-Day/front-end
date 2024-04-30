import BottomSheet from '@/components/common-ui/bottom-sheet';
import { NextPageWithLayout } from '../_app';
import Button from '@/components/common-ui/button';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import { getInterstPagePath } from '@/lib/utils/paths';
import ModeSelector from '@/components/features/mode/mode-selector';

const Mode: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-h1 text-center">오늘은 혼자 놀기? 같이 놀기?</h1>

      <section className="flex gap-4">
        <ModeSelector />
      </section>
    </>
  );
};

Mode.getLayout = (page: ReactElement) => {
  return (
    <>
      {/* TODO: 추후 selector로 각 페이지별이 아닌 컴포넌트 하나로 분리하기 */}
      <div className="mb-[72px]">
        <Ellipsis current={1} total={3} />
      </div>

      <div className="flex flex-col gap-16 px-5">{page}</div>

      <BottomSheet>
        <Button href={getInterstPagePath()} size="L" variant="contained">
          선택완료
        </Button>
      </BottomSheet>
    </>
  );
};

export default Mode;
