var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.upshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift
  return kittens
}
// Add your functions and code here
