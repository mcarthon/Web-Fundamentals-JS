// Number One - Always Hungry

function alwaysHungry(array) {

    let foodCount = array.filter(element => element === "food").length;

    if (foodCount > 0) {

        for (let i = 0; i < foodCount; ++ i) {

            console.log("yummy");

        }

    }

    else {

        console.log("I'm hungry");

    }

}

console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));
console.log(alwaysHungry([4, 1, 5, 7, 2]));

// Number Two - High Pass Filter

function highPass(array, cutoff) {

    return array.filter(element => element > cutoff);

}

console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));


// Number Three - Better than Average

function betterThanAverage(array) {

    return array.filter(element => element > (array.reduce((a, b) => a + b) / array.length)).length;

}

console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9]));

// Number Four - Array Reverse

function reverse(array) {

    let index = 0;

    while (index < array.length/2) {

        let temp = array[array.length - 1 - index];
        array[array.length - 1 - index] = array[index];
        array[index] = temp;

        index ++;

    }

    return array;

}

console.log(reverse(["a", "b", "c", "d", "e"]));

// Number Five - Fibonacci Array

function fibonacciArray(number) {

    let fibArray = [0, 1];
    
    if (number === 1) {

        return fibArray[0];

    }

    else if (number === 2) {

        return fibArray;

    }

    else {

        for (let i = 2; i < number; ++ i) {

            fibArray.push((fibArray[i - 2] + fibArray[i - 1]));

        }

        return fibArray;

    }

}

console.log(fibonacciArray(10));