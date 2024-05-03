import BottomSheet from '@/components/common-ui/bottom-sheet';
import Button from '@/components/common-ui/button';
import { getDistancePagePath, getResultPagePath } from '@/lib/utils/paths';
import { selectedInterestState } from '@/store/interest/atom';
import { useRecoilValue } from 'recoil';

const NextPageButton = () => {
  const selectedInterest = useRecoilValue(selectedInterestState);

  return (
    <BottomSheet>
      <Button
        href={getDistancePagePath()}
        size="L"
        variant="contained"
        disabled={selectedInterest.length === 0}
      >
        선택 완료
      </Button>
    </BottomSheet>
  );
};
export default NextPageButton;
