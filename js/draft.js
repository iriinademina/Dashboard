import getData from "./serviсe";
export class App {
  init() {
    const data = getData();
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;

    new Dashboard().render(data)
  }
}

export class Dashboard {
  constructor() {}
  render(allData) {
    document.querySelector(".wrapper").innerHTML = `${dashboard}`;
    /*["s1", "s2"]*/ stages.forEach(i => {
      new Stage().render(i);
    });
    document.querySelector(".main").innerHTML = stages;
  }
}

export class Stage {
  constructor() {
    this.key = key;
    this.title = title;
    this.elem = elem;
  }
  render(columnData) {
    this.elem.innerHTML = `${stage}`;
    this.elem.id = this.key;
    const courseTitle = this.elem.getElementsByClassName("card__title")[0];
    courseTitle.textContent = this.title;
    //this.elem.textContent = title;
    /*["card1", "card2"]*/ columnElem = column.forEach(i => {
      new Course().render(i);
    });
    const courseCardsContainer = this.elem.querySelector(".cards_container")[0];
    courseCardsContainer.innerHTML = `${columnElem}`;
    return this.elem;
  }
}

export class Course {
  constructor() {
    this.key = key;
    this.title = title;
    this.elem = elem;
  }
  render(cardData) {
    this.elem.innerHTML = `${course}`;
    this.elem.id = this.key;
    this.elem.textContent = title;
    modulesElem = modules.forEach(i => {
      new Module().render(i);
    });
    this.elem.innerHTML = `${modulesElem}`;
    return this.elem;
  }
}

export class Module {
  constructor() {
    this.guid = guid;
    this.title = title;
    this.elem = elem;
  }
  render(moduleData) {
    this.elem.innerHTML = `${module}`;
    this.elem.textContent = this.title;
    this.elem.id = this.guid;
    return this.elem;
  }
}

new App().init();
