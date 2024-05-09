import BottomSheet from '@/components/common-ui/bottom-sheet';
import Button from '@/components/common-ui/button';
import { getResultPagePath } from '@/lib/utils/paths';
import { selectedDistanceState } from '@/store/distance/atom';
import { selectedInterestState } from '@/store/interest/atom';
import { selectedModeState } from '@/store/mode/atom';
import { positionState } from '@/store/position/atom';
import { useRecoilValue } from 'recoil';

const NextPageButton = () => {
  const selectedDistance = useRecoilValue(selectedDistanceState);
  const { lat, lng } = useRecoilValue(positionState);
  const selectedMode = useRecoilValue(selectedModeState);
  const selectedInterests = useRecoilValue(selectedInterestState);

  return (
    <BottomSheet>
      <nav>
        <Button
          href={{
            pathname: getResultPagePath(),
            query: {
              mode: selectedMode,
              interests: selectedInterests,
              distance: selectedDistance,
              lat,
              lng,
            },
          }}
          size="L"
          variant="contained"
          disabled={!selectedDistance}
        >
          추천 받기
        </Button>
      </nav>
    </BottomSheet>
  );
};
export default NextPageButton;
