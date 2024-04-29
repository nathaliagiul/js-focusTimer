import state from '../state.js'
import * as element from '../elements.js'

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    element.minutes.textContent = String(minutes).padStart(2, "0")
    element.seconds.textContent = String(seconds).padStart(2, "0")
}

export function countdown() {
    clearTimeout(state.countdownId);

    if (!state.isRunning) {
        return; // Se não estiver em execução, não faz nada
    }

    let minutes = Number(element.minutes.textContent);
    let seconds = Number(element.seconds.textContent) - 1; // Remover um segundo

    // Verificar se os segundos estão abaixo de zero e ajustar os minutos
    if (seconds < 0) {
        seconds = 59;
        let updatedMinutes = minutes - 1;
        
        if (updatedMinutes < 0) {
            reset(); // Se os minutos e segundos forem ambos 0, reinicie
            return;
        } else {
            updateDisplay(updatedMinutes, seconds);
        }
    } else {
        updateDisplay(minutes, seconds);
    }

    // Configurar o próximo timeout
    state.countdownId = setTimeout(countdown, 1000);
}

export function reset() {
    state.isRunning = false;
    state.minutes = 25;
    document.documentElement.classList.remove('running');
    updateDisplay();
}