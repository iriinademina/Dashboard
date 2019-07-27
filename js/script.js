import addSidebar from "./sidebar.js";
import css from "../css/index.css";
// import App from "./App";
import getData from "./serviсe";
import module from "../components/Module/module.html";
import app from "../components/App/app.html";
import dashboard from "../components/Dashboard/dashboard.html";
import Course from "./draft";

let cardModule = Array.from(document.getElementsByClassName("card"));
/*  -- - -- - -*/
console.log(cardModule);
cardModule.forEach(item => (item.onclick = addSidebar));

class App {
    constructor () {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}${dashboard}${module}`;
    }
    init() {
        getData().then (cards => {
            let modules = cards.reduce((acc, curr) => {
                    return [
                      ...acc,
                      ...curr.modules
                    ];
                  }, []);
            // test render one card
            console.log(modules[0].moduleTitle)
            new Module().render(modules[0].moduleTitle,modules[0].guid)
        }
    )
    }
}

class Module {
    constructor() {
        this.title = moduleTitle;
        this.guid = guid;
        this.modulElement = null;
    }
    render(moduleData) {
        this.modulElement =`${module}`;
        let module = document.getElementsByClassName('card__module')[0];
        module.textContent = this.title;
        module.id = this.guid;
        return this.modulElement;
    }
}

let all = new App()
all.init()



