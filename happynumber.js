//Objective is to see whether a given number is 'happy'.
//A number is 'happy' when eventually the squares of it's digits add up to 0
//in a recursive fashion.

let number = 19


//O(logn) that uses a hashset to check if there's a cycle.

let set = new Set()
while (number !== 1 && !set.has(number)) {
    set.add(number)
    number = getNext(number)
}

function getNext(number) {
    let total = 0
    while (number > 0) {
        let digit = number % 10
        total += digit * digit
        number = Math.floor(number / 10)
    }

    return total
}

return number == 1