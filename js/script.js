import addSidebar from "./sidebar.js";
import css from "../css/index.css";
// import App from "./App";
import getData from "./serviсe";
import moduleCard from "../components/Module/module.html";
import app from "../components/App/app.html";
import dashboard from "../components/Dashboard/dashboard.html";
import course from "../components/Course/course.html";
import stage from "../components/Stage/stage.html";
import sidebar from "../components/SideBar/sidebar.html";
import sidebarCard from "../components/SideBar/sidebarCards/sidebarCard.html";
// import Course from "./draft";

class App {
  constructor() {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;
    this.wrapper = document.getElementsByClassName("wrapper")[0];
    const el = document.querySelector(".main");
    console.log(el);

    const mainElement = document.getElementsByClassName("wrapper")[0];
    console.log(mainElement);
    // console.log(el);
    const totalItem = document.querySelector(".total-score");
    totalItem.innerText = "XXX";
  }

  /*async */ init() {
    const searchButton = document.getElementById("search-icon");
    const search = document.getElementById("search");
    searchButton.addEventListener("click", () => {
      search.focus();
    });
    search.addEventListener("input", value => {
      console.log(value);
    });
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

      // console.log(arrDashboard);
      new Dashboard(this.wrapper).render(arrDashboard);
    });
    getData().then(data => {
      /* variables */
      console.log(data);
      const totalItem = document.querySelector(".total-score");
      totalItem.innerText = data.length;
      const elementt = document.querySelectorAll(".card__module");
      const sidebarElement = document.querySelectorAll(".sidebar__card");
      console.log(sidebarElement);

      const main = document.querySelector(".main");
      const closeSidebarButton = document.querySelector(".close-button");
      let cardElemGuid;
      /* events */

      closeSidebarButton.addEventListener("click", () => {
        new Sidebar().close();
        const highlighted = document.querySelectorAll(".highlight");
        highlighted.forEach(e => {
          e.classList.remove("highlight");
        });
      });
      //console.log(elementt);
      elementt.forEach(element => {
        let guidOfmodule;

        element.addEventListener("click", e => {
          new Sidebar().show();
          guidOfmodule = e.target.dataset.guid;
          const clickedElem = e.target;
          const parentOfClickedElem = e.target.parentElement;
          const cardElem = parentOfClickedElem.parentElement;
          cardElemGuid = cardElem.dataset.guid;
          data.forEach(i => {
            if (i.guid == cardElemGuid) {
              new Sidebar().render(i);
            }
          });

          const highlighted = document.querySelectorAll(".highlight");
          // console.log(".highlight");
          console.log(highlighted);
          highlighted.forEach(e => {
            e.classList.remove("highlight");
          });
          let elementsWithClickedGUID = document.querySelectorAll(
            `div[data-guid="${guidOfmodule}"]`
          );

          elementsWithClickedGUID.forEach(i => {
            i.classList.add("highlight");
          });
          console.log(elementsWithClickedGUID);
        });
      });
      let ddd = document.querySelector("highlight");
      console.log(ddd);
      console.log("ddd");
      // data.modules.forEach(e => {
      //   e.addEventListener("click", f => {
      //     // const highlightedElms = document.querySelectorAll(".highlight");
      //     // highlightedElms.classList.remove("highlight");
      //     // f.classList.add("highlight");
      //   });
      // });
    });
  }
}
// work with sidebar
export class Sidebar {
  constructor() {
    this.container = document.querySelector(".wrapper");
    this.sidebar = this.container.querySelector(".sidebar");
    this.sidebarHeadText = this.sidebar.querySelector(
      ".sidebar__header-textarea"
    );
    this.sidebarCards = this.sidebar.querySelector(".sidebar__card-container");
    this.sidebarCard = document.querySelectorAll(".sidebar__card");
  }

  close() {
    this.sidebar.classList.add("hidden");
    this.sidebarCards.innerHTML = "";
    this.sidebarHeadText.innerText = "";
  }
  show() {
    this.sidebar.classList.remove("hidden");
  }
  render(data) {
    this.sidebarCards.innerHTML = "";
    const courseGUID = data.guid;
    const courseTitle = data.courseTitle;
    this.sidebarHeadText.textContent = courseTitle;
    this.sidebar.dataset.guid = courseGUID;
    console.log("modules");
    console.log(data.modules);
    data.modules.forEach(e => {
      this.sidebarCards.innerHTML += new SidebarCard(this.sidebarCards).render(
        e
      );
    });
  }
}
//sidebar card
export class SidebarCard {
  constructor(container) {
    this.parent = container;
  }
  render(data) {
    this.parent.innerHTML = `${sidebarCard}`;
    const cardModuleContainer = this.parent.querySelector(".sidebar__card");
    const cardModuleTitle = cardModuleContainer.querySelector(
      ".sidebar__card-title"
    );
    const cardModuleStage = cardModuleContainer.querySelector(
      ".sidebar__card-stage"
    );
    cardModuleTitle.textContent = data.moduleTitle;
    cardModuleContainer.dataset.guid = data.guid;
    cardModuleStage.textContent = data.moduleStatus.displayName;

    return this.parent.innerHTML;
  }
}
//dashboard

class Dashboard {
  constructor(container) {
    this.parent = container;
  }

  render(allData) {
    this.parent.innerHTML = `${dashboard}${sidebar}`;
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
    cardContainer.dataset.guid = modules.guid;
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
    cardModuleContainer.dataset.guid = moduleData.guid;
    return this.parent.innerHTML;
  }
}

const all = new App();
all.init();
