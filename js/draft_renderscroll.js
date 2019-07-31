class TestStage {
    startrender() {
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
            console.log(statuses);
      
            // Array for dashboard
            let arrDashboard = Array.from(statuses).map((iStatus) => {
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
                  status : `${iStatus}`,
                  title:   item.courseTitle,
                  guid:    item.guid,
                  module:  item.modules.filter(
                    i => i.moduleStatus.displayName === `${iStatus}`
                  )
                };
              });
            });
            // console.log(arrDashboard);
    
    let copy1 = JSON.parse(JSON.stringify(arrDashboard));
    
    console.log(copy1)





          });
        }
    }

// this.stageContainer.elem.addEventListener(
//       "scroll",
//       e => this.stageActiveScroll(e),
//       true
//     );
//   }
//   stageActiveScroll(e) {
//     const target = e.target;
//     if (!target.classList.contains("cards_container")) {
//       return;
//     }
//     if (target.scrollHeight - target.scrollTop === e.target.offsetHeight) {
//       const stageTitle = target.dataset.title;
//       const [stageToAppent] = this.stageContainer.stages.filter(
//         stage => stage.title === stageTitle
//       );
//       const loadedCourses = this.data.retreiveCourses(stageTitle, 10);
//       stageToAppent.append(loadedCourses);
//     }
//   }
//   retreiveCourses(stageName, amount) {
//     const [requiredStage] = this.cloneData.filter(
//       stage => stageName === stage.name
//     );
//     return requiredStage.courses.splice(0, amount);
//   }