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


//O(1) space solution using Floyd's Tortoise and Hare algorithm

function getNext(n) {
    let temp = getNext(n)
    
    while (n != 1 && temp != n) {
        n = getNext(n)
        temp = getNext(getNext(temp))
    }

    return n == 1

    function getNext(n) {
        let total = 0
        while (n > 0) {
            total += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        
        return total
    }
}