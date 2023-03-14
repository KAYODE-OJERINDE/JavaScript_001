
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
count += 1
countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // rather than the saveEl.innerText, use saveEl.textContent
    // this auto adds space after each string
    countEl.textContent = 0
    count = 0
console.log(count)
}


// This section adds emoji to welcome message
// let welcomeEl = document.getElementById("welcome-el")
// let myName = "Kayode D. Ojerinde"
// let greeting = "Welcome back " 
// welcomeEl.innerText = greeting + myName
// welcomeEl.innerText = welcomeEl.innerText + " emoji"
// the command below is the same as the last command above
// welcomeEl.innerText += "emoji"



// !This section begins tutorial on STRINGS!
// let username = "pearl"

// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser) // This concatinates the output


// let myName = "Kay Huin"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + myName
// console.log(myGreeting)
// ! This section introduces us to "document_funtion"
// document.getElementById("count-el").innerText = 5


// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
// count += 1
// countEl.innerText = count
// }
// function save() {
// console.log(count)
// }

// Create a function that increments the lapsCompleted variable with one
// Run it three times
// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// This point prints sum of lap using function
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// This point sets countdown for a race to initialize
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // Setting up the the race 🏎 🏎 🏎

// countdown()

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown()


// This point shows the increament btn is clicked
// function increment() {
//     console.log("The button was clicked")
// }

// let bonusPoint = 50
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// let myAge = 23 / 2

// console.log(myAge)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console


// let myAge = 14
// let humanDogRatio = 3
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

