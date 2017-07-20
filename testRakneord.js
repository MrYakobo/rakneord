var r = require('./rakneord');
r.modern();

function test() {
    [1994, 1788, 2017].forEach((i) => {
        console.log(r(i))
    })
}

function testAll(){
    for(var i = 0; i <= 10000; i++){
        console.log(r(i))
    }
}

//testAll();