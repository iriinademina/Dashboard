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

class App {
  constructor() {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;
    this.wrapper = document.getElementsByClassName("wrapper")[0];
    const el = document.querySelector(".main");
    // console.log(el);
    const totalItem = document.getElementsByClassName("total-score")[0];
    totalItem.innerText = "XXX";
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

      // Array for dashboard
      let arrDashboard = Array.from(statuses).map(iStatus => {
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
            status: `${iStatus}`,
            title: item.courseTitle,
            guid: item.guid,
            module: item.modules.filter(
              i => i.moduleStatus.displayName === `${iStatus}`
            )
          };
        });
      });
      console.log(arrDashboard)
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
    let arrStage = [];
    allData.forEach((item, index) => {
      arrStage.push(new Stage(dashboardContainer, item));
      dashboardContainer.innerHTML += arrStage[index].render();
    });
    Array.from(dashboardContainer.getElementsByClassName("column")).forEach(
      (i, index) => {
        i.children[1].addEventListener("scroll", event => {
          if (
            +(event.target.scrollHeight - event.target.scrollTop).toFixed(0) ===
            event.target.offsetHeight
          ) {
            setTimeout(() => {
              allData[index].splice(0, 10).forEach(item => {
                i.children[1].innerHTML += new Course(
                  dashboardContainer.getElementsByClassName("cards_container")[
                    index
                  ]
                ).render(item);
              });
            }, 1000);
          }
        });
      }
    );
    return this.parent.innerHTML;
  }
}

class Stage {
  constructor(container, item) {
    this.parent = container;
    this._render = this.render.bind(this);
    this.columnData = item;
  }

  render() {
    this.parent.innerHTML = `${stage}`;
    const stageContainer = this.parent.querySelector(".column");
    const headerContainer = stageContainer.querySelector(".column__header");
    const cardsContainer = stageContainer.querySelector(".cards_container");
    headerContainer.textContent = `${this.columnData[0].status}`;
    this.columnData.splice(0, 10).forEach(item => {
      cardsContainer.innerHTML += new Course(cardsContainer).render(item);
    });
    return this.parent.innerHTML;
  }
}

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
    cardContainer.id = modules.guid;
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
    cardModuleContainer.id = moduleData.guid;
    return this.parent.innerHTML;
  }
}

const all = new App();
all.init();


