let count = 0
while (count < 20) {
    console.log(count)

    count += 1
}


let riddle = "What has a bank but no money?"
let answer = "river"
let guess = ""

// while it is true that guess does not include the answer
while (!guess.includes(answer)) {
    let input = prompt(riddle)
    if (input !== null) {
        guess = input.toLowerCase()
    } else {
        break
    }
}


let input = ""
while (input !== null) {
    input = prompt("Are we there yet?")
}

let counter = 23
while (true) {
    console.log(`This is the song that never ends, and it goes on and on my friends.
    
    Some people started singing it, not knowing what it was, and still continue singing it forever just because...`)

    if (counter > 1) {
        counter -= 1
    } else {
        break
    }
}



console.log("Hurray! You've reached the end of the code!")