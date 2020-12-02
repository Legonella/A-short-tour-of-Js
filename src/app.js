// let incr = 10,
// 	decr = 10;

// incr++
// decr--

// console.log(incr++)
// console.log(decr--)
// console.log(incr)
// console.log(decr)

// console.log(++incr)
// console.log(--decr)

// const isChecked = true,
// 		isClose = true;
//
// console.log(isChecked && isClose) // true

// const isChecked = true,
// 	isClose = false;
//
// console.log(isChecked && isClose) // false

// const isChecked = true,
// 	isClose = false;
//
// console.log(isChecked || isClose) // true

// const isChecked = false,
// 	isClose = false;
//
// console.log(isChecked || isClose) // false

/*
if (4 == 9) {
    console.log(true)
} else {
    console.log(false)
}
*/

// let num = 100;

/*if (num < 49) {
    console.log('Num is less 49')
} else if (num > 100) {
    console.log('Num is more 100')
} else {
    console.log(true)
}*/

/*
(num == 32)? console.log('Num is less 49'):
 (num > 100)? console.log('Num is more 100'): console.log('true')

num == 32
    ? console.log("Num is less 49")
    : num > 100
    ? console.log("Num is more 100")
    : console.log("true"); */

/*
switch(num) {
    case 50:
        console.log('num === 50')
        break;
    case 100:
        console.log('num === 100')
        break;
    default:
        console.log('nothing')
        break;
}
*/

// let num = 50

/*while (num > 'a') {
    console.log(num)
    num--
}*/

/*
do {
    console.log(num)
    num++
} while (num < 55)
*/

/*
for (let i = -10; i = 10; i++) {
    console.log(num)
    num++
}
*/

const numberOfFilms = +prompt('How much is films your watches?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < 2; i++) {
    const a = prompt('last watches of films',''),
          b = prompt('How much do you rate it', '')

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
        console.log('Dune')
    } else {
        console.log('Error')
        i--
    }
}
console.log(personalMovieDB)

personalMovieDB.count <= 10
  ? alert('Watch small films')
  : numberOfFilms <= 30
  ? alert('Your classic viewer')
  : alert('Your kinoman!')

/*
if (personalMovieDB.count < 10) {
   alert('Watches small films')
} else if (personalMovieDB.count < 30) {
    alert('Your classic viewer')
} else {
    alert('Your kinoman')
}
*/
