import FilterButton from '@/components/common-ui/filter-button';
import {
  InterestValue,
  allInterestsState,
  selectedInterestState,
} from '@/store/interest/atom';
import { isAllInterestsSelectedState } from '@/store/interest/selectors';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './styles';
import { VisuallyHidden } from '@/components/common-ui/visually-hidden';

const InterestSelector = () => {
  const allInterests = useRecoilValue(allInterestsState);
  const [selectedInterests, setSelectedInterests] = useRecoilState(
    selectedInterestState
  );
  const isAllSelcted = useRecoilValue(isAllInterestsSelectedState);

  const handleClickAll = () => {
    if (isAllSelcted) {
      setSelectedInterests([]);
    } else {
      setSelectedInterests(allInterests.map(({ value }) => value));
    }
  };

  const handleClickInterest = (value: InterestValue) => {
    if (selectedInterests.includes(value)) {
      setSelectedInterests((prev) =>
        prev.filter((interest) => interest !== value)
      );
      return;
    }
    setSelectedInterests((prev) => [...prev, value]);
  };

  const liveMessage = (() => {
    let message = '';
    if (!selectedInterests.length)
      message = '어떤 기분을 느끼고 싶은지 선택해 보세요.';
    else if (isAllSelcted) message = '모든 기분이 선택되었어요.';
    else
      message =
        allInterests
          .filter(({ value }) => selectedInterests.includes(value))
          .map(({ label }) => label)
          .join(' ') + '이 선택되었어요.';

    return message;
  })();

  return (
    <S.InterestSelector>
      <FilterButton
        active={isAllSelcted}
        size="S"
        onClick={handleClickAll}
        role="checkbox"
        aria-checked={isAllSelcted}
      >
        <Image src={'/images/interest-all.svg'} alt="" width={24} height={25} />
        <span>전체 선택</span>
      </FilterButton>

      {allInterests.map(({ emojiPath, label, value }) => {
        const isSelected = selectedInterests.includes(value);

        return (
          <FilterButton
            active={isSelected}
            size="S"
            key={value}
            onClick={() => handleClickInterest(value)}
            role="checkbox"
            aria-checked={isSelected}
          >
            <Image src={emojiPath} alt="" width={24} height={25} />
            <span>{label}</span>
          </FilterButton>
        );
      })}
      <VisuallyHidden role="status">{liveMessage}</VisuallyHidden>
    </S.InterestSelector>
  );
};

export default InterestSelector;
