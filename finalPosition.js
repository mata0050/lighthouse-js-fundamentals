const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = (moves) => {
  let position = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "west") position[0]--;
    else if (moves[i] === "east") position[0]++;
    else if (moves[i] === "north") position[1]++;
    else position[1]--;
  }
  return position;
};
console.log(finalPosition(moves));
