import addSidebar from "./sidebar.js";
import css from "../css/index.css";
// import App from "./App";
import getData from "./serviсe";
import moduleCard from "../components/Module/module.html";
import app from "../components/App/app.html";
import dashboard from "../components/Dashboard/dashboard.html";
import course from "../components/Course/course.html";
import stage from "../components/Stage/stage.html";
// import Course from "./draft";

let cardModule = Array.from(document.getElementsByClassName("card"));

cardModule.forEach(item => (item.onclick = addSidebar));

class App {
  constructor() {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;
    this.wrapper = document.getElementsByClassName("wrapper")[0];
  }

  init() {
    getData().then(data => {
      let copy1 = JSON.parse(JSON.stringify(data));
      // All uniqe stateses
      let statuses = [
        ...new Set(
          copy1.reduce(
            (acc, curr) => [
              ...acc,
              ...curr.modules.map(item => item.moduleStatus.displayName)
            ],
            []
          )
        )
      ];
      console.log(statuses);

      // Array for dashboard
      let arrDashboard = Array.from(statuses).map((iStatus) => {
        let arr = data
          .map(item => {
            if (
              item.modules.some(
                item1 => item1.moduleStatus.displayName === `${iStatus}`
              )
            )
              return item;
          })
          .filter(Boolean);
        return arr.map(item => {
          return {
            status : `${iStatus}`,
            title:   item.courseTitle,
            guid:    item.guid,
            module:  item.modules.filter(
              i => i.moduleStatus.displayName === `${iStatus}`
            )
          };
        });
      });
      console.log(arrDashboard);
      new Dashboard(this.wrapper).render(arrDashboard);
    });
  }
}


class Dashboard {
  constructor(container) {
    this.parent = container;
  }

  render(allData) {
    this.parent.innerHTML = `${dashboard}`;
    const dashboardContainer = this.parent.querySelector(".main");
    allData.forEach(item => {
      dashboardContainer.innerHTML += new Stage(dashboardContainer).render(
        item
      );
    });
  }
}

// Work with columns
class Stage {
  constructor(container) {
    this.parent = container;
  }

  render(columnData) {
    this.parent.innerHTML = `${stage}`;
    const stageContainer = this.parent.querySelector(".column");
    const headerContainer = stageContainer.querySelector(".column__header");
    const cardsContainer = stageContainer.querySelector(".cards_container");
    headerContainer.textContent = `${columnData[0].status}`;
    columnData.forEach(item => {
      cardsContainer.innerHTML += new Course(cardsContainer).render(item);
    });

    return this.parent.innerHTML;
  }
}

//Test for one column
class Course {
  constructor(container) {
    this.parent = container;
  }

  render(modules) {
    this.parent.innerHTML = `${course}`;
    const cardContainer = this.parent.querySelector(".card");
    const cardTitleContainer = cardContainer.querySelector(".card__title");
    const cardsContainer = cardContainer.querySelector(".cards");
    cardTitleContainer.textContent = modules.title;
    modules.module.forEach(item => {
      cardsContainer.innerHTML += new Module(cardsContainer).render(item);
    });
    return this.parent.innerHTML;
  }
}

class Module {
  constructor(container) {
    this.parent = container;
  }
  render(moduleData) {
    this.parent.innerHTML = `${moduleCard}`;
    const cardModuleContainer = this.parent.querySelector(".card__module");
    cardModuleContainer.textContent = moduleData.moduleTitle;
    return this.parent.innerHTML;
  }
}

const all = new App();
all.init();
