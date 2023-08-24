radio.onReceivedValue(function (cardNum, cardLocation) {
    // 入れ替え中のカードは2つまでしか考慮していないことに注意(3つはずしたらバグる)

    const before = JSON.stringify(numToLocation);

    numToLocation[cardNum as '2' | '3' | '5' | '7' | '9'] = cardLocation

    const after = JSON.stringify(numToLocation)
    
    if (before != JSON.stringify(numToLocation)){
        radio.sendString(after)
    }

})

let numToLocation: { '2': number, '3': number, '5': number, '7': number, '9': number } = {
    '2': 4,
    '3': 3,
    '5': 0,
    '7': 2,
    '9': 1,
}

let undocking = false
radio.setGroup(1)
basic.forever(function () {

})
