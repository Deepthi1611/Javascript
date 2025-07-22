const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promise 1 resolved');
    reject('Promise 1 failed'); // Promise.all fails after 1 second
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promise 2 resolved');
    reject('Promise 2 failed'); // Promise.all fails after 2 seconds
  }, 2000);
}); 

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promise 3 resolved');
    reject('Promise 3 failed'); // Promise.all fails after 3 seconds
  }, 3000);
});

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//     console.error('One or more promises failed:', error);
//   })

// safest option among all
// Promise.allSettled([p1, p2, p3])
//   .then((results) => {
//     console.log('All promises settled:', results);
//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise ${index + 1} resolved with value:`, result.value);
//       } else {
//         console.error(`Promise ${index + 1} rejected with reason:`, result.reason);
//       }
//     });
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });

// Promise.race([p1, p2, p3])
//   .then((result) => {
//     console.log('First promise resolved:', result);
//   })
//   .catch((error) => {
//     console.error('First promise rejected:', error);
//   });

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log('First fulfilled promise:', result);
  })
  .catch((error) => {
    console.error('All promises were rejected:', error);
  }); 