function encodeAndDecodeMessages() {
    let textAreas = document.getElementsByTagName("textarea");
    let[message,lastRecivedMessage] = textAreas;

    let buttons = document.getElementsByTagName("button");
    let[encode,decode] = buttons;

    encode.addEventListener("click", encodeMessage);
    decode.addEventListener("click", decodeMessage);

    function encodeMessage(){
        let currentMessage = message.value;
        let newMessage = '';
        
        for (let index = 0; index < currentMessage.length; index++) {
            let newText = 
            String.fromCodePoint(currentMessage[index].charCodeAt(0) + 1);

            newMessage += newText;
        }

        lastRecivedMessage.value = newMessage;
        message.value = '';
    }

    function decodeMessage(){
        let currentMessage = lastRecivedMessage.value;
        let newMessage = '';
        
        for (let index = 0; index < currentMessage.length; index++) {
            let newText = 
            String.fromCodePoint(currentMessage[index].charCodeAt(0) - 1);

            newMessage += newText;
        }

        lastRecivedMessage.value = newMessage;
    }
}