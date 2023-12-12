function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/messenger";
    const sendButton = document.getElementById("submit");
    const refreshButton = document.getElementById("refresh");
    const textArea = document.getElementById("messages");

    const authorName = document.getElementsByName("author")[0];
    const message = document.getElementsByName("content")[0];

    sendButton.addEventListener("click", async () =>{

        let obj = {
            author: authorName.value,
            content: message.value
        };

        await fetch(baseURL,{
            method: "POST",
            body: JSON.stringify(obj)
        });

        authorName.value = "";
        message.value = "";
    });

    refreshButton.addEventListener("click", async() => {
        let response = await fetch(baseURL);
        let messages = await response.json();

        let allMessages = [];

        Object.entries(messages).forEach(element => {
            let messageToDisplay = `${element[1].author}: ${element[1].content}`;
            allMessages.push(messageToDisplay);
        });

        textArea.textContent = allMessages.join("\n");
    });

}   

attachEvents();