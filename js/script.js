import addSidebar from "./sidebar.js";
import css from "../css/index.css";
import App from "./App";
import getData from "./serviсe";

let cardModule = Array.from(document.getElementsByClassName("card"));
console.log(cardModule);
cardModule.forEach(item => (item.onclick = addSidebar));

const container = new App();
container.render();

getData().then(response => {
  // keys / displayName
  let statuses = Array.from(
    new Set(
      response.reduce(
        (acc, curr) => [
          ...acc,
          ...curr.modules.map(item => item.moduleStatus.displayName)
        ],
        []
      )
    )
  );
  console.log(statuses);
  let result = response.reduce((acc, curr) => {
    return [
      ...acc,
      ...curr.modules.filter(
        item => item.moduleStatus.displayName === `${statuses[0]}`
      )
    ];
  }, []);

  result.forEach(item => {
    let title = document.createElement("div");
    title.textContent = item.moduleTitle;
    title.appendChild(document.createElement("div")).textContent = "Lorem";
    title.style.border = "1px solid gray";
    document.body.appendChild(title);
  });
});
