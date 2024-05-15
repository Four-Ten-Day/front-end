import FilterButton from '@/components/common-ui/filter-button';
import { ModeValue, selectedModeState } from '@/store/mode/atom';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import * as S from './styles';
import { VisuallyHidden } from '@/components/common-ui/visually-hidden';

const ModeSelector = () => {
  const [selectedMode, setSelectedMode] = useRecoilState(selectedModeState);

  const handleClick = (mode: ModeValue) => {
    const newMode = mode === selectedMode ? null : mode;
    setSelectedMode(newMode);
  };

  const liveMessage = (() => {
    let message = '';
    if (!selectedMode) message = '혼자 놀지 같이 놀지 선택해주세요.';

    if (selectedMode === 'alone') message = '혼자 놀기를 선택했습니다.';
    if (selectedMode === 'together') message = '같이 놀기를 선택했습니다.';

    return message;
  })();

  return (
    <>
      <S.ModeSelector>
        <FilterButton
          size="L"
          active={selectedMode === 'alone'}
          onClick={() => handleClick('alone')}
          role="checkbox"
          aria-checked={selectedMode === 'alone'}
        >
          <Image
            src={'/images/mode-alone.svg'}
            alt=""
            aria-hidden={true}
            width={75}
            height={76}
          />
          <span>혼자 놀거에요</span>
        </FilterButton>
        <FilterButton
          size="L"
          active={selectedMode === 'together'}
          onClick={() => handleClick('together')}
          role="checkbox"
          aria-checked={selectedMode === 'together'}
        >
          <Image
            src={'/images/mode-together.svg'}
            alt=""
            aria-hidden={true}
            width={75}
            height={76}
          />
          <span>같이 놀거에요</span>
        </FilterButton>
      </S.ModeSelector>

      <VisuallyHidden role="status">{liveMessage}</VisuallyHidden>
    </>
  );
};

export default ModeSelector;
