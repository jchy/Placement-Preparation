let suggestionsArr = suggestions;
// console.log(suggestionsArr);
const inputBox = document.querySelector(".search-input");

inputBox.onkeyup = function (e) {
  let userInput = e.target.value;
  let matchedSuggestions = [];
  let conatiner = document.querySelector(".suggetsions-list");
  conatiner.textContent = "";
  if (userInput.length > 0) {
    matchedSuggestions = suggestionsArr.filter((suggestions) =>
      suggestions.toLocaleLowerCase().startsWith(userInput.toLocaleLowerCase())
    );
  }
  if (matchedSuggestions.length === 0) {
    matchedSuggestions.push(userInput);
  }
//   console.log(matchedSuggestions);
  let div = document.createElement("div");
  div.style.textAlign = "center";
  div.style.width = "600px";
  div.style.textAlign = "center";
  div.style.margin = "auto";
  for (let i = 0; i < matchedSuggestions.length; i++) {
    let list = document.createElement("li");
    list.textContent = matchedSuggestions[i];
    list.style.listStyle = "none";
    list.style.margin = ".5px";
    list.style.background = "whitesmoke";
    list.style.color = "teal";
    list.style.fontSize = "16px";
    list.style.padding = "3px";
    list.style.width = "600px";
    list.addEventListener("click", () => {
      inputBox.value = list.textContent;
    });
    div.appendChild(list);
  }
  conatiner.appendChild(div);
};
