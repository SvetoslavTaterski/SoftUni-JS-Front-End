function extractText() {
    let allElements = document.querySelectorAll('li');
    let textArea = document.getElementById("result");

    for (const element of allElements) {
        textArea.textContent += `${element.textContent}\n`
    }
}