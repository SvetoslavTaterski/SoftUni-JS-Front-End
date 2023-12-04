function attachEventsListeners() {

    let daysInput = document.getElementById("days");
    let daysButton = document.getElementById("daysBtn");
    daysButton.addEventListener("click",convertDays);

    let hoursInput = document.getElementById("hours");
    let hoursButton = document.getElementById("hoursBtn");
    hoursButton.addEventListener("click",convertHours);

    let minutesInput = document.getElementById("minutes");
    let minutesButton = document.getElementById("minutesBtn");
    minutesButton.addEventListener("click",convertMinutes);

    let secondsInput = document.getElementById("seconds");
    let secondsButton = document.getElementById("secondsBtn");
    secondsButton.addEventListener("click",convertSeconds);

    function convertDays(){
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function convertHours(){
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function convertMinutes(){
        secondsInput.value = minutesInput.value * 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }

    function convertSeconds(){
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }

}