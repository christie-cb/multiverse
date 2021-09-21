function pause(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

async function printWithDelay(arr, delay) {
    /** Prints each elt of the array,
     *  pausing for specified delay after
     *  each console.log.
     **/
    for (let i in arr) {
        console.log(arr[i]);
        await pause(delay);
    }
}

async function printWithDelayUsingThen(arr, delay) {
    for (let i in arr) {
        await pause(delay).then(() => console.log(arr[i]));
    }
}

//const arr = ["a", "b", "c"];
//const delay = 500;
//
//for (let i in arr) {
//    pause(delay).then(() => console.log(arr[i]));
//}

console.log("Are we....");
printWithDelay([1, 2, 3], 1000);
console.log("Blocking?");
