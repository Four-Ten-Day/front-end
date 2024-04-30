import FilterButton from '@/components/common-ui/filter-button';
import {
  InterestValue,
  allInterestsState,
  selectedInterestState,
} from '@/store/interest/atom';
import { isAllInterestsSelectedState } from '@/store/interest/selectors';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';

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

  return (
    <div className="grid gap-3 grid-cols-2">
      <FilterButton active={isAllSelcted} size="S" onClick={handleClickAll}>
        <Image
          src={'/images/interest-all.svg'}
          alt="모두 선택"
          width={24}
          height={25}
        />
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
          >
            <Image src={emojiPath} alt={label} width={24} height={25} />
            <span>{label}</span>
          </FilterButton>
        );
      })}
    </div>
  );
};

export default InterestSelector;
