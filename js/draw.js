
class HeaderWrapper {
  render() {
    const container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${header}${wrapper}`;
    return container;
  }
}

class Sidebar {
  constructor(courseTitle, courseModules) {
    this.header = courseTitle;
  }
  renderSidebar() {}
  render() {}
  clear() {
    this.courses = [];
    this.element.innerHTML = "";
  }
}

class Dashboard {
  constructor(data) {
    this.stages = [];
    this.element = this.renderDashboard();
  }
  renderDashboard() {
    // const bodyContainer = document.getElementsByClassName("wrapper");
    const main = document.getElementsByClassName("main")[0];
    main.classList.add("main");
    /// bodyContainer.append(main);
  }

  render() {}
}
class Stage {
  constructor(data) {}
  renderStage(title, key) {
    /* --------------- */
    const divStage = document.createElement("div");
    divStage.classList.add("column");
    divStage.classList.add(key);
    /* --------------- */
    const divStageHeaderElem = document.createElement("div");
    divStageHeaderElem.classList.add("column__header");
    /* --------------- */
    const divStageHeaderText = document.createElement("h3");
    divStageHeaderText.textContent = title;
    divStage.append(divStageHeaderElem);
    divStageHeaderElem.append(divStageHeaderText);
  }
  clear() {
    this.courses = [];
    this.element.innerHTML = "";
  }
}
class Course {
  constructor(title, guid, module) {
    this.guid = guid;
    this.title = data.title;
    this.element = this.renderCourse(data.title);
    //  this.render(data.modules);
    this.modules = [];
  }
  renderCourse() {
    const divCourse = renderCard(this.guid);
    const divCourseTitle = renderCardsTitle(this.title);
    const dvCardContainer = renderCardModules();
    divCourse.append(divCourseTitle);
    divCourse.append(divCardContainer);
  }
  renderCard(guid) {
    const divCourse = document.createElement("div");
    divCourse.classList.add("card");
    divCourse.dataset.guid = guid;
    return divCourse;
  }
  renderCardsTitle(title) {
    const divCourseTitle = document.createElement("card__title");
    divCourseTitle.classList.add("card__title");
    divCorserTitle.textContent = title;
    divCourse.append(divCourseTitle);
    return divCourseTitle;
    /*   
      divCourseTitleText = document.createElement("h3");
      divCourseTitleText.textContent = title;
       */
  }
  renderCardModules() {
    const divCardContainer = document.createElement("div");
    divCardContainer.classList.add("cards");
    return divCardContainer;
  }
  render(modulesData) {
    this.modules = modulesData.map(
      (moduleData = new Module(data.title, data.guid))
    );
    let moduleElements = this.modules.map(moduleItem => moduleItem.element);
    this.element.append(...moduleElements);
  }
}
class Module {
  constructor(title, guid) {
    this.title = title;
    this.guid = guid;
    this.moduleElement = this.renderModule;
  }
  renderModule(title, guid) {
    const moduleElem = (document.querySelector(
      `#${parent.guid}`
    ).innerHTML = `${module}`);
    const div = document.createElement("div");
    div.classList.add("card__module");
    div.dataset.guid = guid;
    div.textContent = title;
    return div;
  }
}
