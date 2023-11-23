function extract(content) {
    let regex = /\(([^)]*)\)/g;

    let text = document.getElementById("content").textContent;

    let matches = text.match(regex);

    return matches.join("; ");
}