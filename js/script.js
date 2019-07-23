import addSidebar from './sidebar.js'
import css from '../css/general.css'

let cardModule = Array.from(document.getElementsByClassName("card_link"))
console.log(cardModule)
cardModule.forEach (item => item.onclick = addSidebar)

