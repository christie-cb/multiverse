const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  let date = new Date().getSeconds();
  if (date - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}

console.log("here")

