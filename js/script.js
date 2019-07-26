import addSidebar from "./sidebar.js";
import css from "../css/index.css";
import App from "./App";
import getData from "./serviсe";


let cardModule = Array.from(document.getElementsByClassName("card"));
/*  -- - -- - -*/
console.log(cardModule);
cardModule.forEach(item => (item.onclick = addSidebar));

const container = new App();
container.render();


getData().then(response => {
  // keys / displayName
  let statuses = [
  ...new Set (response.
    reduce((acc, curr) => [
      ...acc,
      ...curr.modules.map(
        item => item.moduleStatus.displayName
      )
      ], [])
    )]

  console.log(statuses);

  // test modules in status
  
  let result1 = response.reduce((acc, curr) => {
    return [
      ...acc,
      ...curr.modules.filter(
        item => item.moduleStatus.displayName === `${statuses[0]}`
      )
    ];
  }, []);
 console.log(result1)
  let result2 = response.reduce((acc, curr) => {
    return [
      ...acc,
      ...curr.modules.filter(
        item => item.moduleStatus.displayName === `${statuses[1]}`
      )
    ];
  }, []);
  console.log(result2)
  
  
 // test names courses in statuses[0]

 let testCourses1 = response.map(item => {
  if (item.modules.some(item1 => item1.moduleStatus.displayName === `${statuses[0]}`.length !== 0))
  return item.courseTitle
 }
  )
  console.log(testCourses1.filter(Boolean))

  // test objects courses in statuses[1]

  let testCourses2 = response.map(item => {
    if (item.modules.some(item1 => item1.moduleStatus.displayName === `${statuses[1]}`))
      return item
   }
  )
 console.log(testCourses2.filter(Boolean))


 let testCourses3 = response.map(item => {
  if (item.modules.some(item1 => item1.moduleStatus.displayName === `${statuses[2]}`))
  return item.courseTitle
 }
  )

  console.log(testCourses3.filter(Boolean))

  let course = 
    response.
      reduce((acc, curr) => [
        ...acc,
        ...curr.modules.map(
          item => item.moduleStatus.displayName
        )
        ], [])
      
  // test output cards

  // result.forEach(item => {
  //   let title = document.createElement("div");
  //   title.textContent = item.moduleTitle;
  //   title.style.border = "1px solid gray";
  //   document.body.appendChild(title);
  // });
//  let wrapper = document.createElement("div");
//       document.body.appendChild(wrapper);
//       wrapper.style.display = "flex";
//   statuses.forEach (status => {
//     let wrapper = document.createElement("div");
//       document.body.appendChild(wrapper);
//     result.forEach ( card => {
//       result.forEach(item => {
//       let title = document.createElement("div");
//       title.textContent = item.moduleTitle;
//       title.style.border = "1px solid gray";
//       wrapper.appendChild(title);
//     });
//   })
// }) 

});
