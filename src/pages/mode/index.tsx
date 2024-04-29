import BottomSheet from '@/components/bottom-sheet';
import { NextPageWithLayout } from '../_app';
import Button from '@/components/button';
import { ReactElement } from 'react';

const Mode: NextPageWithLayout = () => {
  return <>mode page</>;
};

Mode.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="px-5">{page}</div>
      <BottomSheet>
        <Button href={'/'} size="L" variant="contained">
          선택완료
        </Button>
      </BottomSheet>
    </>
  );
};

export default Mode;
