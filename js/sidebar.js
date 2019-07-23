
function addSidebar (event) {
    event.preventDefault()
    let sidebar = document.getElementsByClassName("wrapper")[0]
        .appendChild(document.createElement("div"))
    sidebar.className = "sidebar"
    let content = sidebar.appendChild (document.createElement("p"))
    content.textContent = "Hello"
    content.onclick = function (event) {sidebar.remove()}
}

export default addSidebar