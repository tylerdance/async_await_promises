// const successfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        resolve()
//     }, 3000)
// })
// console.log(successfulPromise);


// const unsuccessfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(reject, 3000)
// })
// console.log(unsuccessfulPromise);

// setTimeout(function() {
//     console.log(successfulPromise);
//     console.log(unsuccessfulPromise);
// }, 4000)



// my unsuccessufl conditional priomise
// const variable = 5
// const conditionalPromise = new Promise(resolve, reject) {
//     if (5 === 5) {
//         return resolve();
//     } else {
//         return reject();
//     }
// };


// copied classsmates
// const conditionalPromise = new Promise(function(resolve, reject) {
//     if (2**3 === 3**2) {
//         reject();
//     } else {
//         resolve();
//     }
// })
// console.log(conditionalPromise);


// function myFetch(url) {
//     const myPromise = new Promise(function(res, rej) {
//         // get data
//         const webData = somehowGetWebData()
//         if (webData.statusCode < 400) {
//             res()
//         } else if (400 <= webData.statusCode <= 599) {
//             rej()
//         }
//     })

//     return myPromise;
// }

// myFetch('some-url.com').then(...) // or ...catch(...)



// another example
const conditionalPromise = new Promise(function(res, rej) {
    if (5 < 10) {
        res();
    } else {
        rej()
    }
})
// console.log(conditionalPromise);

conditionalPromise.then((res) => console.log(res)).catch((err) => console.error(err))