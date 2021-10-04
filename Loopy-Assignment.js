let num = 100;

while (num <= 200) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse")
  } else if (num % 3 === 0) {
    console.log("Loopy")
  } else if (num % 4 === 0) {
    console.log("Lighthouse")
  }
  console.log(num)

  num++
}


let data = ['1', '2', '3', '4']

for (let v of data) {
  console.log(v)
}

