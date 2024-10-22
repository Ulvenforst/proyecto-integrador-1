const seededRandom = (seed, index) => {
  const x = Math.sin(seed + index) * 10000;
  return x - Math.floor(x);
};

const getSeededPosition = (seed, index, factor) => {
  return [
    (seededRandom(seed, index * 3) - 0.5) * factor,
    0,
    (seededRandom(seed, index * 3 + 1) - 0.5) * factor,
  ];
};

const getSeededTreeType = (seed, index) => {
  const randomValue = seededRandom(seed, index * 3 + 2);
  const treeIndex = Math.floor(randomValue * TREE_TYPES.length);
  return TREE_TYPES[treeIndex];
};

export { seededRandom, getSeededPosition, getSeededTreeType };
