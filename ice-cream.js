const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "cookies and cream",
  "rocky road",
  "strawberry",
];
console.log(iceCreamFlavours);

// Add a Flavor
iceCreamFlavours.push('root beer');
console.log(iceCreamFlavours);

// Get the First Flavour
console.log(iceCreamFlavours[0]);

// Get the Last Flavour
console.log(iceCreamFlavours[iceCreamFlavours.length - 1])

// Total Number of Flavours
console.log(iceCreamFlavours.length)

const areMultiples  = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}
