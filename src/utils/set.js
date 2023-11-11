export function unionSets(set1, set2) {
  return new Set([...set1, ...set2]);
}

export function intersectionSets(set1, set2) {
  const result = new Set();
  for (const item of set1) {
    if (set2.has(item)) {
      result.add(item);
    }
  }
  return result;
}

export function getRandomElementFromSet(set) {
  if (set.size === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * set.size);
  let currentIndex = 0;

  for (const item of set) {
    if (currentIndex === randomIndex) {
      return item;
    }
    currentIndex++;
  }
}
