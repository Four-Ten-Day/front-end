import { selectedDistanceFixtureState } from '@/store/distance/selectors';
import { useRecoilValue } from 'recoil';

const Label = () => {
  const { label } = useRecoilValue(selectedDistanceFixtureState);

  return (
    <h2 className="text-h2">
      <span className="text-secondary-04">{label}</span> 이동 가능해요!
    </h2>
  );
};
export default Label;
