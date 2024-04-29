import state from '../state.js'
import * as event from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()

    event.registerControls()
    event.clickOnSound()
    event.clickOnMode()
}