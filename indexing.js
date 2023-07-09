
coordinate_to_id = {};
id_to_coordinate = {};
let cnt = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 3; i < 6; i++) {
  for (let j = 0; j < 3; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 6; i < 9; i++) {
  for (let j = 0; j < 3; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j < 6; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 3; i < 6; i++) {
  for (let j = 3; j < 6; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 6; i < 9; i++) {
  for (let j = 3; j < 6; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 6; j < 9; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 3; i < 6; i++) {
  for (let j = 6; j < 9; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}

for (let i = 6; i < 9; i++) {
  for (let j = 6; j < 9; j++) {
    coordinate_to_id[`${i},${j}`] = cnt;
    id_to_coordinate[cnt] = { first: i, second: j };
    cnt++;
  }
}
