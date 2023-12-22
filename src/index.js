import home from "./home.js";
import { menuTabPage as menuContent } from "./menu.js";
import { header as head } from "./menu.js";
import { contactTabPage } from "./contacts.js";
import { contactHeader } from "./contacts.js";

import "./styles.css";

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);
content.setAttribute("style", "overflow:hidden;height:100vh;margin:0;");
window.onload = content.appendChild(home());
const contentSide = document.querySelector(".contentSide");
// contentSide.setAttribute('style','width:80vw; display:flex; margin:0; flex-direction:column; height:auto; gap:0.3vh;margin:0;');

const contentDivs = document.querySelector(".contentDivs");
const header = document.querySelector(".header");

const menuTab = document.querySelector(".menu");
menuTab.setAttribute("style", "margin-bottom:5vh;");
menuTab.addEventListener("click", () => {
  if (
    contentSide.hasChildNodes(contactHeader) === true &&
    contentSide.hasChildNodes(contactTabPage) === true
  ) {
    contactHeader.remove();
    contactTabPage.remove();
    contentSide.appendChild(head);
    contentSide.appendChild(menuContent);
  }
  header.remove();
  contentDivs.remove();
  contentSide.appendChild(head);
  contentSide.appendChild(menuContent);
});

const contactTab = document.querySelector(".contacts");
contactTab.addEventListener("click", () => {
  if (
    contentSide.hasChildNodes(head) === true &&
    contentSide.hasChildNodes(contentDivs) === true
  ) {
    header.remove();
    contentDivs.remove();
    contentSide.appendChild(contactHeader);
    contentSide.appendChild(contactTabPage);
  }
  head.remove();
  menuContent.remove();
  contentSide.appendChild(contactHeader);
  contentSide.appendChild(contactTabPage);
});

const homeTab = document.querySelector(".home");
homeTab.setAttribute("style", "margin-bottom:5vh;");
homeTab.addEventListener("click", () => {
  if (
    contentSide.hasChildNodes(contactHeader) === true &&
    contentSide.hasChildNodes(contactTabPage) === true
  ) {
    contactHeader.remove();
    contactTabPage.remove();
    contentSide.appendChild(header);
    contentSide.appendChild(contentDivs);
  }
  head.remove();
  menuContent.remove();
  contentSide.appendChild(header);
  contentSide.appendChild(contentDivs);
});

// .addEventListener('click',() => {
//     content.removeChild(home());
//     content.appendChild(menu());
// })

// (npm run <your Script>)
// "deploy": "gh-pages --dist 'dist' --branch 'release'"
