import * as element from '../elements.js'
import * as sounds from '../sounds.js'
import * as timer from './timer.js'
import state from '../state.js'

export function toggleMode(){
    let darkMode = true
    
    element.mode.addEventListener('click', (event) => {
        document.documentElement.classList.toggle('light')

        const mode = darkMode ? 'light' : 'dark'

        event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
        darkMode = !darkMode
    })
}

export function toggleMusic(clickedButton) {
    let audioToPlay = null;

    switch (true) {
        case clickedButton.classList.contains('ph-tree'):
            audioToPlay = sounds.buttonSoundFlorest;
            break;
        case clickedButton.classList.contains('ph-cloud-rain'):
            audioToPlay = sounds.buttonSoundRain;
            break;
        case clickedButton.classList.contains('ph-storefront'):
            audioToPlay = sounds.buttonSoundCoffeeShop;
            break;
        case clickedButton.classList.contains('ph-fire'):
            audioToPlay = sounds.buttonSoundFireplace;
            break;
        default:
            break;
    }

    const allSounds = [sounds.buttonSoundFlorest, sounds.buttonSoundRain, sounds.buttonSoundCoffeeShop, sounds.buttonSoundFireplace];

    // Pausa todos os sons
    allSounds.forEach(sound => {
        if (sound !== audioToPlay) { 
            // Não pausa o som atualmente clicado
            sound.pause();
        }
    });

    // Toca ou pausa o áudio clicado
    if (audioToPlay.paused) {
        audioToPlay.play();
        clickedButton.classList.add('playing');
    } else {
        audioToPlay.pause();
        clickedButton.classList.remove('playing');
    }
}

export function toggleRunning(clickedButton) {
    if(clickedButton.classList.contains('ph-play')){
        state.isRunning = true;
        document.documentElement.classList.add('running');
        timer.countdown();
    }
    
    if(clickedButton.classList.contains('ph-stop')){
        timer.reset()
    }
}

export function toggleMoreOrLess(clickedButton) {
    if(clickedButton.classList.contains('ph-plus')){
        state.minutes = state.minutes >= 60 ? state.minutes : state.minutes + 5;
    }
    
    if(clickedButton.classList.contains('ph-minus')){
        state.minutes = state.minutes <= 0 ? state.minutes : state.minutes - 5;
    }

    timer.updateDisplay();
    timer.countdown();
}


