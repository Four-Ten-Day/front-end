import { allDistanceState, selectedDistanceState } from '@/store/distance/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as RadixSlider from '@radix-ui/react-slider';
import { selectedDistanceIndexState } from '@/store/distance/selectors';

const Slider = () => {
  const distanceConfigs = useRecoilValue(allDistanceState);
  const [selectedDistance, setSelectedDistance] = useRecoilState(
    selectedDistanceState
  );
  const selectedDistanceIndex = useRecoilValue(selectedDistanceIndexState);

  const minValue = 0;
  const maxValue = distanceConfigs.length - 1;

  const handleValueChange = ([index]: number[]) => {
    setSelectedDistance(distanceConfigs[index].distance);
  };

  return (
    <>
      <RadixSlider.Root
        className="w-full h-4 relative flex items-center"
        min={minValue}
        max={maxValue}
        value={[selectedDistanceIndex]}
        onValueChange={handleValueChange}
      >
        <RadixSlider.Track className="bg-primary-05 relative grow rounded-full h-1">
          <RadixSlider.Range className="bg-primary-05 absolute rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block w-8 h-8 bg-primary-01 rounded-full" />
        <div className="absolute top-1/2 -z-10 transform -translate-y-1/2 w-full flex justify-between items-center">
          {distanceConfigs.map(({ label }) => (
            <div
              key={label}
              className={'bg-primary-05 h-6 w-6 rounded-full cursor-pointer'}
            />
          ))}
        </div>
      </RadixSlider.Root>

      <div className="flex justify-between items-center w-full">
        {distanceConfigs.map(({ label, distance }) => (
          <span
            key={label}
            className={`${
              selectedDistance === distance ? '' : 'opacity-0'
            } font-nanum-gothic text-b4 text-primary-03`}
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
};

export default Slider;
