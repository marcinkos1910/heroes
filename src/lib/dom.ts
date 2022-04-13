export function getText(
    element: HTMLElement | DocumentFragment,
    selector: string,
) {
    return element.querySelector(selector)?.textContent;
}

export function setText(
    element: HTMLElement | DocumentFragment,
    selector: string,
    text: string,
) {
    element.querySelector(selector).textContent = text.toString();
}

export function showMessage(text = '', title = 'Info', append = false) {
    const element = document.getElementById('message-box');
    element.style.visibility = !!text ? 'visible' : 'hidden';

    let newText = text;
    if (append) {
        let oldText = getText(element, '.message-body');
        newText = `${oldText}\r\n${text}`;
    }

    setText(element, '.message-header', title);
    setText(element, '.message-body', newText);
}

function cloneElementsFromTemplate(templateName: string){
    const template: HTMLTemplateElement = document.getElementById(templateName);
    return document.importNode(template.content, true);
}

export function showFetching(selector: string){
    const progressClone: DocumentFragment = cloneElementsFromTemplate('progress-template');
    const heroPlaceholder: HTMLElement = document.querySelector(selector);
    heroPlaceholder.replaceWith(progressClone);
}