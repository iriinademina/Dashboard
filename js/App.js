import app from "../components/App/app.html";
import course from "../components/Course/course.html";
import module from "../components/Module/module.html";
import stage from "../components/Stage/stage.html";
import { runInThisContext } from "vm";
class App {
  constructor() {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;
    document.querySelector(".wrapper").innerHTML = `${course}`;
  }

  render() {
    return this.container;
  }
}

//classes
class Stage {
  constructor() {
    this.title = title;
    this.key = key;
    this.courses = [];
    this.stage = null;
  }
  renderStage() {
    this.stageElement = `${stage}`;
    this.stageElement.id = this.key;
    const stageTitle = stage.getElementsByClassName("column__header");
    stageTitle.textContent = this.title;
    return this.stageElement;
  }
  render(coursesData) {
    this.courses = coursesData.map(
      stageData => new Course(coursesData.guid, coursesData.title)
    );
    const courseElements = this.courses.map(
      courseItem => courseItem.coursElement
    );
    this.stage.append(...courseElements);
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
    this.courseElement = `${course}`;
    this.courseElement.id = this.guid;
    const courseTitle = course.getElementsByClassName("card__title")[0];
    courseTitle.textContent = this.title;
    return this.courseElement;
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
  renderModule() {
    this.modulElement = `${module}`;
    this.modulElement.textContent = this.title;
    this.modulElement.id = this.guid;
    return this.modulElement;
  }
}
export default App;
