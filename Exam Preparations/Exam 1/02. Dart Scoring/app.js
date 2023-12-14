window.addEventListener("load", solve);

function solve() {
  let [playerName, playerScore, playerRound] =
    document.getElementsByTagName("input");

  let addButton = document.getElementById("add-btn");
  let unorderedList = document.getElementById("sure-list");
  let scoreboardList = document.getElementById("scoreboard-list");
  let buttonClear = document.getElementsByClassName("btn clear")[0];

  buttonClear.addEventListener("click", () => {
    window.location.reload();
  })

  addButton.addEventListener("click", addData);

  function addData() {
    if (
      playerName.value != "" &&
      playerScore.value != "" &&
      playerRound.value != ""
    ) {
      let newLi = document.createElement("li");
      newLi.classList.add("dart-item");

      let newArticle = document.createElement("article");
      newLi.appendChild(newArticle);

      let paragraphName = document.createElement("p");
      let paragraphScore = document.createElement("p");
      let paragraphRound = document.createElement("p");

      paragraphName.textContent = playerName.value;
      paragraphScore.textContent = `Score: ${playerScore.value}`;
      paragraphRound.textContent = `Round: ${playerRound.value}`;

      newArticle.appendChild(paragraphName);
      newArticle.appendChild(paragraphScore);
      newArticle.appendChild(paragraphRound);

      let newEditButton = document.createElement("button");
      newEditButton.addEventListener("click", (e) => {
        let currentLi = e.currentTarget.parentNode;
        let currentArticle = currentLi.firstElementChild;
        let currentParagraphs = currentArticle.children;

        let [name,score,round] = Array.from(currentParagraphs);

        playerName.value = name.textContent;
        playerScore.value = score.textContent.split(" ")[1];
        playerRound.value = round.textContent.split(" ")[1];

        unorderedList.removeChild(currentLi);
        
        addButton.disabled = false;
      });

      newEditButton.textContent = "edit";
      newEditButton.classList.add("btn");
      newEditButton.classList.add("edit");
      newLi.appendChild(newEditButton);

      let newOKButton = document.createElement("button");

      newOKButton.addEventListener("click", (e) => {
        let currentLi = e.currentTarget.parentNode;
        let currentArticle = currentLi.firstElementChild;
        let currentParagraphs = currentArticle.children;

        let [name,score,round] = Array.from(currentParagraphs);
        
        let newLiScoreboard = document.createElement("li");
        newLiScoreboard.classList.add("dart-item");

        let newArticleScoreboard = document.createElement("article");
        newLiScoreboard.appendChild(newArticleScoreboard);

        let paragraphNameScoreboard = document.createElement("p");
        let paragraphScoreScoreboard = document.createElement("p");
        let paragraphRoundScoreboard = document.createElement("p");

        paragraphNameScoreboard.textContent = name.textContent;
        paragraphScoreScoreboard.textContent = score.textContent;
        paragraphRoundScoreboard.textContent = round.textContent;

        newArticleScoreboard.appendChild(paragraphNameScoreboard);
        newArticleScoreboard.appendChild(paragraphScoreScoreboard);
        newArticleScoreboard.appendChild(paragraphRoundScoreboard);

        scoreboardList.appendChild(newLiScoreboard);

        unorderedList.removeChild(currentLi);

        addButton.disabled = false;
      })

      newOKButton.textContent = "ok";
      newOKButton.classList.add("btn");
      newOKButton.classList.add("ok");
      newLi.appendChild(newOKButton);

      unorderedList.appendChild(newLi);

      playerName.value = "";
      playerRound.value = "";
      playerScore.value = "";

      addButton.disabled = true;
    }
  }
}
