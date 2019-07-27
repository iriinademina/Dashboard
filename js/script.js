import addSidebar from "./sidebar.js";
import css from "../css/index.css";
// import App from "./App";
import getData from "./serviсe";
import module from "../components/Module/module.html";
import app from "../components/App/app.html";
import dashboard from "../components/Dashboard/dashboard.html";
import course from "../components/Course/course.html";
// import Course from "./draft";

let cardModule = Array.from(document.getElementsByClassName("card"));
/*  -- - -- - -*/
console.log(cardModule);
cardModule.forEach(item => (item.onclick = addSidebar));

class App {
    constructor () {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;
    document.getElementsByClassName("wrapper")[0].innerHTML = `${dashboard}${course}`
    }
    init() {
        getData().then (data => {
            let modules = data.reduce((acc, curr) => {
                    return [
                      ...acc,
                      ...curr.modules
                    ];
                  }, []);
            // test render one card
            // console.log(modules[0].moduleTitle)
            
            let cards = data.map(item => item)
            // console.log(cards)
            // console.log(cards[0].courseTitle,cards[0].guid)
            // console.log(cards[0].modules)

            // new Module(modules[0].moduleTitle,modules[0].guid).render()
            new Course (cards[0].courseTitle,cards[0].guid).render(cards[0].modules)

        }
     )
    }
}

class Module {
    constructor(moduleTitle,guid) {
        this.title = moduleTitle;
        this.guid = guid;
        this.modulElement = null;
       
    }
    render() {
        this.modulElement =`${module}`;
        let module1 = document.querySelector('.card__module')
        module1.textContent = this.title;
        module1.id = this.guid;
        return this.modulElement;
    }
}

class Course {
    constructor(title,guid) {
      this.guid = guid;
      this.title = title;
      this.courseElem = null;
    }
    render(modules) {
      this.courseElem = `${course}`;
      const card = document.getElementsByClassName('card')[0];
      const cardTitle = document.getElementsByClassName('card__title')[0];
      const cardsMods = document.getElementsByClassName('cards')[0];
      //   card.id = this.guid;
      cardTitle.textContent = this.title;
    //   let obj = Object.assign ({},{title:moduleTitle,guid:guid})
      modules.forEach((i) => {
        //  console.log(i)
          new Module(i.moduleTitle,i.guid).render()
      });
    //   console.log(modulesElem)
    //   cardsMods.innerHTML = `${module}`;
      return this.courseElem;
    }
  }
  

let all = new App()
all.init()



