input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.showLeds(`
    # . # . #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(2000)
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(277, music.beat(BeatFraction.Whole))
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
