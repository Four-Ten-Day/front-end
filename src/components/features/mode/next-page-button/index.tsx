import BottomSheet from '@/components/common-ui/bottom-sheet';
import Button from '@/components/common-ui/button';
import { getInterstPagePath } from '@/lib/utils/paths';
import { selectedModeState } from '@/store/mode/atom';
import { useRecoilValue } from 'recoil';

const NextPageButton = () => {
  const selectedMode = useRecoilValue(selectedModeState);

  return (
    <BottomSheet>
      <Button
        href={getInterstPagePath()}
        size="L"
        variant="contained"
        disabled={!selectedMode}
      >
        선택 완료
      </Button>
    </BottomSheet>
  );
};

export default NextPageButton;
