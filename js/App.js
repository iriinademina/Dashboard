import app from "../components/App/app.html";
import course from "../components/Course/course.html";
import module from "../components/Module/module.html";
import stage from "../components/Stage/stage.html";
import dashboard from "../components/Dashboard/dashboard.html";
import { runInThisContext } from "vm";
// class App {
//   constructor() {
//     let container = document.getElementsByClassName("gen-wrapper")[0];
//     container.innerHTML = `${app}`;
//     document.querySelector(".wrapper").innerHTML = `${dashboard}`;
//   }

//   render() {
//     return this.container;
//   }
// }

//classes
class Dashboard {
  constructor() {
    this.dashboardElem = null;
    this.stages = [];
  }
  render(stagesData) {
    this.dashboardElement = `${dashboard}`;
    this.dashboardElem = this.dashboardElement;
    this.stages = stagesData.map(
      dashData => new Stage(stagesData.guid, stagesData.title)
    );
    const stageElements = this.stages.map(stageItem => stageItem.stageElement);
    this.stageElem.append(...stageElements);
  }
  clear() {
    this.stages = [];
    this.dashboardElem.innerHTML = "";
  }
}
class Stage {
  constructor() {
    this.title = title;
    this.key = key;
    this.courses = [];
    this.stageElem = null;
  }
  renderStage() {
    this.stageElement = `${stage}`;
    this.stageElement.id = this.key;
    const stageTitle = stage.getElementsByClassName("column__header");
    stageTitle.textContent = this.title;
    this.stageElem = this.stageElement;
  }
  render(coursesData) {
    this.courses = coursesData.map(
      stageData => new Course(coursesData.guid, coursesData.title)
    );
    const courseElements = this.courses.map(
      courseItem => courseItem.coursElement
    );
    this.stageElem.append(...courseElements);
  }
  clear() {
    this.courses = [];
    this.stageElem.innerHTML = "";
  }
}
class Course {
  constructor() {
    this.guid = guid;
    this.title = title;
    this.modules = modules;
    this.courseElement = null;
  }
  renderElement() {
    this.courseElem = `${course}`;
    this.courseElem.id = this.guid;
    const courseTitle = course.getElementsByClassName("card__title")[0];
    courseTitle.textContent = this.title;
    this.coursElement = this.courseElem;
  }
  render(modulesData) {
    this.modules = modulesData.map(
      modulData => new Module(modulData.title, modulData.guid)
    );
    const modulElements = this.modules.map(
      moduleItem => moduleItem.modulElement
    );
    this.courseElement.append(...modulElements);
  }
}
class Module {
  constructor() {
    this.title = title;
    this.guid = guid;
    this.modulElement = null;
  }
  renderModule(moduleData) {
    this.modulElement = `${module}`;
    this.modulElement.textContent = moduleData.moduleTitle;
    this.modulElement.id = this.guid;
    return this.modulElement;
  }
}
export default App;
