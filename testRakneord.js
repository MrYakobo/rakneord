var r = require('./rakneord');

function test(){
    for(var i = 0; i <= 10000; i++){
        console.log(r(i) + "\t\t" + i)
    }
}

r.modern();
test();