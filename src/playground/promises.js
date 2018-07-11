const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Mark!',
      age: 26
    });
    // reject('Error!');
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log('1st', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3rd');
    }, 2000);
  });
  
}).then((str) => {
  console.log('2nd', str);
})
.catch((err) => {
  console.log('Error: ', err);
});

console.log('after');