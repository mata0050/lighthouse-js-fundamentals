const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (station) {
  let array = [];
  for (let i = 0; i < station.length; i++) {
    if (
      station[i][1] >= 20 &&
      (station[i][2] === "school" || station[i][2] === "community centre")
    ) {
      array.push(station[i][0]);
    }
  }

  return array;
};

console.log(chooseStations(stations));
