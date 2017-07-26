var assert = require('assert');
var r = require('../rakneord');

function fullTest() {
    for (var i = 0; i <= 10000; i++) {
        console.log(r(i) + "\t\t" + i)
    }

}

describe('#traditional', function(){
    it('rakneord(2000, "traditional")', function(){
        assert.equal(r(2000, 'traditional'), 'tjugohundra')
    });

    it('rakneord(1999, "traditional")', function(){
        assert.equal(r(1999, 'traditional'), 'nittonhundranittionio')
    });
})

describe('#modern', function(){
    it('rakneord(2000, "modern")', function(){
        assert.equal(r(2000, 'modern'), 'tvåtusen')
    });

    it('rakneord(1999, "traditional")', function(){
        assert.equal(r(1999, 'traditional'), 'nittonhundranittionio')
    });
})

describe('#counting', function(){
    it('rakneord(2000, "counting")', function(){
        assert.equal(r(2000, 'counting'), 'tvåtusen')
    });

    it('rakneord(1999, "counting")', function(){
        assert.equal(r(1999, 'counting'), 'etttusenniohundranittionio')
    });
})