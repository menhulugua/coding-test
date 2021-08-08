import { WORLD_WIDTH, WORLD_HEIGHT } from '../constants.js';

// (world: boolean[][]) => boolean[][]
export const next = (world) => {
  return world;
};
// (pattern: string) => boolean[][]
export const parse = (pattern) => {
  const world = [...Array(WORLD_HEIGHT)].map(a => Array(WORLD_WIDTH).fill(false));
  const width = pattern[0].length;
  const height = pattern.length;

  const startX = Math.floor((WORLD_WIDTH - width) / 2);
  const startY = Math.floor((WORLD_HEIGHT - height) / 2);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (pattern[i][j] === 'O')
        world[startY + i][startX + j] = true;
    }
  }

  return world;
};