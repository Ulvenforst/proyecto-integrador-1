const seededRandom = (seed, index) => {
  const x = Math.sin(seed + index) * 10000;
  return x - Math.floor(x);
};

const getSeededSideRotation = (seed, index, maxTiltAngle = Math.PI / 12) => {
  // Solo generamos rotación para el eje Z (inclinación lateral)
  return (seededRandom(seed, index * 3 + 7) * 2 - 1) * maxTiltAngle;
};

const isPositionValid = (position, occupiedPositions, minRadius) => {
  for (const occupied of occupiedPositions) {
    const dx = position[0] - occupied.position[0];
    const dz = position[2] - occupied.position[2];
    const distance = Math.sqrt(dx * dx + dz * dz);
    const minDistance = minRadius + occupied.radius;
    
    if (distance < minDistance) {
      return false;
    }
  }
  return true;
};

const generateRandomPosition = (seed, index, factor) => {
  return [
    (seededRandom(seed, index * 3) - 0.5) * factor,
    0,
    (seededRandom(seed, index * 3 + 1) - 0.5) * factor,
  ];
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

export { seededRandom, getSeededPosition, getSeededTreeType, getSeededSideRotation };
