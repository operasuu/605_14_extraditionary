radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index <= 4; index++) {
        led.plot(receivedNumber, index)
        basic.pause(100)
        led.unplot(receivedNumber, index)
    }
    if (x == receivedNumber) {
        radio.sendString("oh no")
        basic.showNumber(分數)
        basic.pause(500)
        x = 2
        led.stopAnimation()
        led.enable(true)
    }
})
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, 4)
        x += -1
        led.plot(x, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    x_bullet = x
    for (let index = 0; index <= 3; index++) {
        led.plot(x_bullet, 3 - index)
        basic.pause(100)
        led.unplot(x_bullet, 3 - index)
    }
    radio.sendNumber(x_bullet)
})
radio.onReceivedString(function (receivedString) {
    分數 += 1
    basic.showNumber(分數)
    basic.pause(500)
    x = 2
    led.stopAnimation()
    led.enable(true)
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, 4)
        x += 1
        led.plot(x, 4)
    }
})
let x_bullet = 0
let 分數 = 0
let x = 0
radio.setGroup(121)
x = 2
分數 = 0
basic.forever(function () {
    led.plot(x, 4)
})
