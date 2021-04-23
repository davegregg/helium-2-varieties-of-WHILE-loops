let count = 0
while (count < 20) {
    console.log(count)

    count += 1
}



let riddle = "What has a bank but no money?"
let answer = "river"
let guess = ""

function askTheRiddle () { // hoisting
    let input = prompt(riddle)
    if (input === null) {
        return null
    } else {
        return input.toLowerCase()
    }
}

// while it is true that guess does not include the answer
while (!guess.includes(answer)) {
    guess = askTheRiddle()
    if (guess === null) {
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



let goats = ["Sir Reginald", "Peter", "BillyBilly", "Tina", "Nelly", "Casper", "Sargeant", "Inigo Montoya"]
let html = `
    <h3>Names of our Goats</h3>
    <ul>
`
console.log(html)
while (goats.length > 0) {
    let goatName = goats.pop()
    html += `
        <li>${goatName}</li>
    `
    console.log(html)
}
html += `</ul>`
document.write(html)





console.log("Hurray! You've reached the end of the code!")
