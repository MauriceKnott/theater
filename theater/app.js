/* eslint-disable no-unused-vars */
// const playerTwoName = "jenn";
// const playerOneName = "tim";

// const playerOne = {
//   name: "tim",
//   marker: "O",
//   score: 15,
// };

// const playerTwo = {
//   name: "jenn",
//   marker: "X",
//   score: 5,
// };

// function keepScore() {
//   if (playerOne.score >= 10) {
//     gameOver(playerOne)
//   } else if (playerTwo.score >= 10) {
//     gameOver(playerTwo)
//   } 
// }
 
// keepScore();

// function gameOver(winningPlayer) {
//   console.log("congratulations!")
//   console.log(winningPlayer.name + " is the Winner!")
// }

// function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//     this.sayName = function() {
//         console.log(name)
//     }
// }


// const playerOne = new Player('steve', 'X')
// const playerTwo = new Player('jim', 'O')

// playerOne.sayName()
// playerTwo.sayName()


// function Student (name, grade) {
//     this.name = name 
//     this.grade = grade 
// }

// Student.prototype.sayName = function() {
//     console.log(this.name)
// }

// Student.prototype.goToProm = function() {
//     console.log("Eh... go to prom?")
// }

// function isGoing() {
//     if (studentOne.grade >= 9) {
//         console.log(Student.prototype.goToProm())
//     }
// }

// const studentOne = new Student('reese', 9)

// studentOne.goToProm()

// function student () {

// }

// student.prototype.sayName = function () {
//     console.log(this.name)
// }

// eightGrader.prototype = Object.create(student.prototype)


// function eightGrader(name) {
//     this.name = name
//     this.grade = 8
// }

// function ninthGrader(name) {
//     this.name = name
//     this.grade = 9
// }

// ninthGrader.prototype = Object.create(student.prototype)
// ninthGrader.prototype.sayName = function() {
//     console.log('HAHAHAHAHAHA')
// }


// const studentOne = new ninthGrader('josh')
// studentOne.sayName()

// const studentTwo = new eightGrader('Mary')
// studentTwo.sayName()


function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(title, author, pages, read)
    }
}