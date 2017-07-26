var swe = {
    tens: ['tio', 'tjugo', 'trettio', 'fyrtio', 'femtio', 'sextio', 'sjuttio', 'åttio', 'nittio'],
    hundred: 'hundra',
    thousand: 'tusen',
    undertwenty: ['', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton', 'tjugo'],
    underten: ['', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']
}

module.exports = function (input, mode) {
    var count = {
        thousands: 0,
        hundreds: 0,
        tens: 0,
        underten: 0,
    }

    var i = input;

    if (i === 0) {
        return 'noll'
    }

    if (mode == 'counting' || i > 10000 || i >= 2000) {
        while (i >= 1000) {
            count.thousands++;
            i -= 1000;
        }
    }
    while (i >= 100) {
        count.hundreds++;
        i -= 100;
    }
    while (i >= 10) {
        count.tens++;
        i -= 10;
    }

    count.underten = i;

    if (mode == 'traditional') {
        return oldie(count);
    }
    if (mode == 'counting') {
        return counting(count);
    }

    //here, mode is either modern or not defined
    if (input < 2000) {
        return oldie(count);
    }
    return counting(count);
}

//nittonhundranittiosju; tjugohundrasjutton
function oldie(count) {
    var s = "";
    var hundreds = count.hundreds + count.thousands * 10;
    if (hundreds > 0)
        s += swe.undertwenty[hundreds] + 'hundra';
    return s + undertwenty(count);
}
//etttusenniohundranittiosju; tvåtusensjutton
function counting(count) {
    var s = "";
    if (count.thousands > 0)
        s += swe.underten[count.thousands] + 'tusen'
    if (count.hundreds > 0)
        s += swe.underten[count.hundreds] + 'hundra'
    return s + undertwenty(count)
}

function undertwenty(count) {
    //if ental + tiotal*10 <= 20
    var s = "";
    var c = count.underten + count.tens * 10
    if (c <= 20 && c > 0) {
        s += swe.undertwenty[c];
    } else {
        if (count.tens > 0)
            s += swe.tens[count.tens - 1]
        if (count.underten > 0)
            s += swe.underten[count.underten]
    }
    return s;
}