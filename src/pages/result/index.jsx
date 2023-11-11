import { useOnboarding } from '../../contexts/OnboardingContext';
import PlaceRecommendation from '../../features/result/place-recommendation';
import ResultDetail from '../../features/result/result-detail';
import {
  getRandomElementFromSet,
  intersectionSets,
  unionSets,
} from '../../utils/set';

function Result() {
  const { isWithOther, selectedInterests, allInterests, modeConfig } =
    useOnboarding();
  // 1) active, romantic, ...
  // 여러 set 합쳐
  const interestCategories = allInterests
    .filter((config) => selectedInterests.includes(config.value))
    .map((config) => config.categories);

  const unionedSet = interestCategories.reduce((acc, set) => {
    for (const item of set) {
      acc.add(item);
    }
    return acc;
  }, new Set());

  // 2) alone
  // 두개 set 합친것중에 alone에 있는 것만 남겨
  const modeCategories = isWithOther
    ? modeConfig['together']
    : modeConfig['alone'];
  const intersectionSet = intersectionSets(unionedSet, modeCategories);

  // 3) 교집합의 원소 중 하나만 랜덤으로 뽑아
  const selectedCategory = getRandomElementFromSet(intersectionSet);

  return (
    <>
      <ResultDetail category={selectedCategory} />
      <PlaceRecommendation category={selectedCategory} />
    </>
  );
}
export default Result;
