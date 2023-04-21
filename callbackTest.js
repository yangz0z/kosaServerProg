/*
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
}
run();
console.log('Done !!!')
//시간이 찍힌 후 Done이 찍힘


function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
}
run();
console.log('Done !!!')
//Done이 먼저 찍히고 시간이 찍힘


//콜백함수
function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
}
//run의 파라미터로 익명즉시실행함수를 보냄
run(() => {
    console.log('Done !!!');
});


//Promise 객체 활용
function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
run().then(() => {console.log('Done !!!');});
run().then(() => {return run()}).then(() => {console.log('Done !!!');});
*/

//callback hell을 보완하기 위한 async/await 활용(ES8~)
function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
async function process() {
    await run();
    await run();
    console.log('Done !!!');
}
process();