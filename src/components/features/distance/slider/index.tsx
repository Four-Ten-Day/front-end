import { allDistanceState, selectedDistanceState } from '@/store/distance/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const Slider = () => {
  const distanceConfigs = useRecoilValue(allDistanceState);
  const [selectedDistance, setSelectedDistance] = useRecoilState(
    selectedDistanceState
  );

  return (
    <>
      <div className="relative w-full h-8">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full bg-primary-05 h-1"></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center">
          {distanceConfigs.map(({ label, distance }) => (
            <div
              key={label}
              onClick={() => setSelectedDistance(distance)}
              className={`${
                distance === selectedDistance
                  ? 'bg-primary-01 h-8 w-8'
                  : 'bg-primary-05 h-6 w-6'
              } rounded-full cursor-pointer`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        {distanceConfigs.map(({ label, distance }) => (
          <span
            key={label}
            className={`${selectedDistance === distance ? '' : 'opacity-0'}`}
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
};

export default Slider;
