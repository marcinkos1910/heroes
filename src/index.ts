import { showFetching, showMessage } from "./lib/dom";

const searchEmailElement: HTMLInputElement = document.getElementById('search-email');
const button: HTMLButtonElement = document.querySelector('.search-button');

function render() {
    showMessage();
    showFetching('.hero-list');
}

searchEmailElement.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') render();
})