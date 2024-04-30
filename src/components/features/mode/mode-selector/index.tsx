import FilterButton from '@/components/common-ui/filter-button';
import { Mode, modeState } from '@/store/onboarding';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

const ModeSelector = () => {
  const [selectedMode, setSelectedMode] = useRecoilState(modeState);

  const handleClick = (mode: Mode) => {
    const newMode = mode === selectedMode ? null : mode;
    setSelectedMode(newMode);
  };

  return (
    <>
      <FilterButton
        size="L"
        active={selectedMode === 'alone'}
        onClick={() => handleClick('alone')}
      >
        <Image
          src={'/images/mode-alone.svg'}
          alt="혼자 놀기"
          width={75}
          height={76}
        />
        <span>혼자 놀거에요</span>
      </FilterButton>
      <FilterButton
        size="L"
        active={selectedMode === 'together'}
        onClick={() => handleClick('together')}
      >
        <Image
          src={'/images/mode-together.svg'}
          alt="같이 놀기"
          width={75}
          height={76}
        />
        <span>같이 놀거에요</span>
      </FilterButton>
    </>
  );
};

export default ModeSelector;
