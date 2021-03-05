function PromiseRace(promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return reject(new TypeError('not an array'));
    }
    

    const promiseNum = promiseArray.length;

    if (promiseNum === 0) {
      return resolve(promiseArray);
    }

    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promiseArray[i]).then((val) => {
        resolve(val);
      });
    }
  });
}


// PromiseRace([]).then(val=>{console.log(val)}); 	// []

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2');
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3');
  }, 3000);
});


PromiseRace([p1, p2, p3]).then(val=>{console.log(val)});
