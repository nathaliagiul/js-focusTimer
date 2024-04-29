import * as elements from "../elements.js";
import * as action from "./actions.js"

export function clickOnMode(){
    elements.mode.addEventListener('click', action.toggleMode())
}

export function clickOnSound() {
    elements.songs.forEach(button => {
        button.addEventListener('click', () => {
            action.toggleMusic(button);
        });
    });
}

export function registerControls(){
    elements.controlsRunning.forEach(button => {
        button.addEventListener('click', () => {
            action.toggleRunning(button);
        });
    });

    elements.controlsMoreOrLess.forEach(button => {
        button.addEventListener('click', () => {
            action.toggleMoreOrLess(button);
        });
    });
}

