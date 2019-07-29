import addSidebar from "./sidebar.js";
import css from "../css/index.css";
// import App from "./App";
import getData from "./serviсe";
import module from "../components/Module/module.html";
import app from "../components/App/app.html";
import dashboard from "../components/Dashboard/dashboard.html";
import course from "../components/Course/course.html";
import stage from "../components/Stage/stage.html";
// import Course from "./draft";

let cardModule = Array.from(document.getElementsByClassName("card"));
/*  -- - -- - -*/
// console.log(cardModule);
cardModule.forEach(item => (item.onclick = addSidebar));

class App {
    constructor () {
    let container = document.getElementsByClassName("gen-wrapper")[0];
    container.innerHTML = `${app}`;
    document.getElementsByClassName("wrapper")[0].innerHTML = 
          `${dashboard}${stage}`
    }
    init() {
        getData().then (data => {
            let copy1 = JSON.parse ( JSON.stringify ( data) )
            let copy2 = JSON.parse ( JSON.stringify ( copy1) )
            // console.log(copy)

            // let modules = data.reduce((acc, curr) => {
            //         return [
            //           ...acc,
            //           ...curr.modules
            //         ];
            //       }, []);
            // // test render one card
            // let cards = data.map(item => item)
            // // new Module(modules[0].moduleTitle,modules[0].guid).render()


            // All stateses 
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
                
    // console.log(statuses[2]);
    // console.log(data)

    let stage0 = data.map(item => {
                if (
                  item.modules.some(
                     (item1) => item1.moduleStatus.displayName === `${statuses[0]}`
                  )
                )
                  return item
            }).filter(Boolean)
    
    //  console.log(stage0[0].modules)
    let copyStage0 = JSON.parse (JSON.stringify (stage0))
    // console.log(copyStage0)
    //все со статусом reject
    // let stage0Modules = copyStage0.map( item => {
    //      return [
    //          item.courseTitle,
    //          item.modules.filter(i => i.moduleStatus.displayName === `${statuses[0]}`)
    //       ]
    // })
    // //     item.modules.filter(i => i.moduleStatus.displayName === `${statuses[0]}`))
    // console.log(stage0Modules[1])

        let stage0Obj = copyStage0.map (item => {
              return {
                  title: item.courseTitle,
                  guid: item.guid,
                  module: item.modules.filter(i => i.moduleStatus.displayName === `${statuses[0]}`)
                }
            })

    console.log(stage0Obj)
    new Stage ().render(stage0Obj)

        //  new Course(stage0Obj.courseTitle,stage0Obj.guid).render(stage0Obj[5].module)

    //     }
      })
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
      let card = document.getElementsByClassName('card')[0];
      let cardTitle = document.getElementsByClassName('card__title')[0];
      // let cardsMods = document.querySelectorAll('.card')
      // //console.log(cardsMods + 'dddddd');
      //   card.id = this.guid;
    //   cardTitle.textContent = this.title;
      modules.forEach((item,index) => { 
          let modul = new Module(item.moduleTitle,item.guid).render()
          console.log(modul)

          // let allmod = document.getElementsByClassName('.card')[0]
          // allmod.innerHTML = modul
        //   cardsMods.querySelectorAll('.card__module')[index].textContent = item.moduleTitle
      });
       console.log( "course")
       return this.courseElem;
    }
  }
  
  // Work with columns
  class Stage {
    constructor() {
    //   this.key = key;
    //   this.title = title;
    //   this.elem = null;
    //   this.i = i
    }
    render(columnData) {
      this.elem = `${stage}`;
      let courseTitle = document.getElementsByClassName("card__title")[0];
      let column = document.getElementsByClassName('cards_container')[0];
      columnData.forEach((item,index) => { 
           let card = new Course(item.title,item.guid).render(item.module)
           console.log(card)
           column.innerHTML += card
           let cardsMods = Array.from(document.querySelectorAll('.card__title'))
           cardsMods[index].textContent = item.title
        
      });
      console.log("stage")
      console.log(this.elem)
      return this.elem;
    }
  }

const all = new App()
all.init()



