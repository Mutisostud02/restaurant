import home from './home';
import {menuTabPage as menuContent} from './menu';
import {header as head} from './menu';
import './styles.css';

const content = document.querySelector('.content');
content.setAttribute('style','overflow:hidden;height:100vh;margin:0;')
window.onload = content.appendChild(home());
const contentSide = document.querySelector('.contentSide');
// contentSide.setAttribute('style','width:80vw; display:flex; margin:0; flex-direction:column; height:auto; gap:0.3vh;margin:0;');

const contentDivs = document.querySelector('.contentDivs');
const header = document.querySelector('.header');

const menuTab = document.querySelector('.menu');
menuTab.setAttribute('style','margin-bottom:5vh;')
menuTab.addEventListener('click',()=> {
    header.remove();
    contentDivs.remove();
    contentSide.appendChild(head());
    contentSide.appendChild(menuContent())

}, {once: true});



// .addEventListener('click',() => {
//     content.removeChild(home());
//     content.appendChild(menu());
// })

