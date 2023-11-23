function editElement(element,match,replacer) {

    let regex = new RegExp(match, 'g');

    element.textContent = element.textContent.replace(regex,replacer);
   
}