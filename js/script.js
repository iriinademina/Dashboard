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
    document.getElementsByClassName("wrapper")[0].innerHTML = 
          `${dashboard}${course}`
    // document.getElementsByClassName("card")[0].innerHTML = `${module}`
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
            new Course (cards[1].courseTitle,cards[1].guid).render(cards[1].modules)

        }
     )
    }
}

class Module {
    constructor(moduleTitle,guid,i) {
        this.title = moduleTitle;
        this.guid = guid;
        this.modulElement = null;
        this.i = i
    }
    render() {
        this.modulElement =`${module}`;
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
      modules.forEach((item,index) => { 
          let card = new Module(item.moduleTitle,item.guid).render()
          cardsMods.innerHTML += card
          document.querySelectorAll('.card__module')[index].textContent = item.moduleTitle
      });
       console.log(modules)
       return this.courseElem;
    }
  }
  

let all = new App()
all.init()



