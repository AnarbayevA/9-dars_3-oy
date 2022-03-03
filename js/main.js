var numbers = [3.02, -3.65, 5, -9]

function funcNumber(newNumber) {
    var result = []
    var notes = -1

    for (var i = 0; i < numbers.length; i++) {
        
        if (numbers[i] < 0) {
           result.push(Math.round(numbers[i] * notes))
        }

        else{
            result.push(Math.round(numbers[i]))
        }
        
    }

    return result;
}

console.log(funcNumber(numbers));


