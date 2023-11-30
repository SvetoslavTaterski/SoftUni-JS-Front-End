function attachGradientEvents() {
  let box = document.getElementById("gradient");
  let result = document.getElementById("result");

  box.addEventListener("mousemove", showPercentage);
  box.addEventListener("mouseout", removePercentage);

  function showPercentage(event) {
    let power = event.offsetX / (event.target.clientWidth - 1);

    power = Math.trunc(power * 100);
    result.textContent = power + "%";
  }

  function removePercentage() {
    result.textContent = "";
  }
}
