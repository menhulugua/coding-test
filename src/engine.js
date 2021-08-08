// (world: boolean[][]) => boolean[][]
export const next = (world) => {
  let width = world[0].length;
  let height = world.length;
  let newWorld = [...world].map(a => [...a]);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let neighbors = checkNeighbors(world, i, j);
      if (world[i][j]) {
        if (neighbors < 2 || neighbors >= 4)
          newWorld[i][j] = false;  
      } else {
        if (neighbors === 3)
          newWorld[i][j] = true;
      }
    }
  }

  return newWorld;
};


// return number of neighbors
export const checkNeighbors = (world, i, j) => {
  let count = 0;
  let width = world[0].length;
  let height = world.length;
  // up
  if (i - 1 >= 0 && world[i - 1][j])
    count++;
  // down
  if (i + 1 < height && world[i + 1][j])
    count++;
  // left
  if (j - 1 >= 0 && world[i][j - 1])
    count++;
  //right
  if (j + 1 < width && world[i][j + 1])
    count++;
  //up left
  if (i - 1 >= 0 && j - 1 >= 0 && world[i - 1][j - 1])
    count++;
  // up right
  if (i - 1 >= 0 && j + 1 < width && world[i - 1][j + 1])
    count++;
  //down left
  if (i + 1 < height && j - 1 >= 0 && world[i + 1][j - 1])
    count++;
  //down right
  if (i + 1 < height && j + 1 < width && world[i + 1][j + 1])
    count++;

  return count;
}

// (pattern: string) => boolean[][]
export const parse = (pattern) => {
  const parsed = pattern.trim().split('\n').map(row => row.split('')); 
  let width = parsed[0].length;
  let height = parsed.length;
  
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (parsed[i][j] === 'O')
        parsed[i][j] = true;
      else
      parsed[i][j] = false;
    }
  }

  if (!parsed[0] || !parsed[0].length)
    return [];
  return parsed;
};