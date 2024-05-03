import BottomSheet from '@/components/common-ui/bottom-sheet';
import Button from '@/components/common-ui/button';
import { getResultPagePath } from '@/lib/utils/paths';
import { selectedDistanceState } from '@/store/distance/atom';
import { useRecoilValue } from 'recoil';

const NextPageButton = () => {
  const selectedDistance = useRecoilValue(selectedDistanceState);
  return (
    <BottomSheet>
      <Button
        href={getResultPagePath()}
        size="L"
        variant="contained"
        disabled={!selectedDistance}
      >
        추천 받기
      </Button>
    </BottomSheet>
  );
};
export default NextPageButton;
