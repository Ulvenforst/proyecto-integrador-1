const seededRandom = (seed, index) => {
  const x = Math.sin(seed + index) * 10000;
  return x - Math.floor(x);
};

const getSeededSideRotation = (seed, index, maxTiltAngle = Math.PI / 12) => {
  return (seededRandom(seed, index * 3 + 7) * 2 - 1) * maxTiltAngle;
};

const isPositionTooClose = (pos1, pos2, minDistance) => {
  const dx = pos1[0] - pos2[0];
  const dz = pos1[2] - pos2[2];
  const distance = Math.sqrt(dx * dx + dz * dz);
  return distance < minDistance;
};

const generateRandomPosition = (seed, index, factor) => {
  return [
    (seededRandom(seed, index * 3) - 0.5) * factor,
    0,
    (seededRandom(seed, index * 3 + 1) - 0.5) * factor,
  ];
};

const isPositionValid = (position, existingPositions, minRadius) => {
  if (!existingPositions.every(pos => !isPositionTooClose(position, pos.position, minRadius))) {
    return false;
  }
  return true;
};

const getSeededPosition = (seed, index, factor, minRadius = 1, maxAttempts = 50, existingPositions = []) => {
  let position = generateRandomPosition(seed, index, factor);
  let attempts = 0;

  while (attempts < maxAttempts) {
    if (isPositionValid(position, existingPositions, minRadius)) {
      return position;
    }
    
    position = generateRandomPosition(seed + attempts * 1000, index, factor);
    attempts++;
  }

  console.warn(`Could not find valid position after ${maxAttempts} attempts`);
  return position;
};

const getSeededTreeType = (seed, index, types) => {
  const randomValue = seededRandom(seed, index * 3 + 2);
  const typeIndex = Math.floor(randomValue * types.length);
  return types[typeIndex];
};

export { 
  seededRandom, 
  getSeededPosition, 
  getSeededTreeType, 
  getSeededSideRotation, 
  isPositionTooClose 
};