export default function pageLoad() {
  //two divs left and right,left =sidebar right = contentSide
  function sidebar() {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.setAttribute(
      "style",
      "background-color:#78716c; width:20vw;margin:0;height:100vh;overflow:hidden;",
    );
    sidebar.appendChild(sideUl());
    return sidebar;
  }

  function sideUl() {
    const sideUl = document.createElement("ul");
    sideUl.setAttribute(
      "style",
      "list-style-type:none;cursor:pointer;color:white;font-weight:bold;height:50vh;display:flex;flex-direction:column;",
    );
    const home = document.createElement("li");
    home.classList.add("home");
    home.innerHTML = "HOME";
    home.setAttribute("style", "margin-bottom:5vh;");
    const menu = document.createElement("li");
    menu.classList.add("menu");
    menu.innerHTML = "MENU";
    menu.setAttribute("style", "margin-bottom:5vh;");
    const contacts = document.createElement("li");
    contacts.classList.add("contacts");
    contacts.innerHTML = "CONTACTS";
    contacts.setAttribute("style", "margin-bottom:5vh;");
    sideUl.appendChild(home);
    sideUl.appendChild(menu);
    sideUl.appendChild(contacts);
    return sideUl;
  }

  function imageDiv() {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");
    imageDiv.setAttribute("style", "height:75vh;background-size:cover;");
    return imageDiv;
  }
  function div1() {
    const div1 = document.createElement("div");
    const div1Paragraph = document.createElement("p");
    div1Paragraph.setAttribute(
      "style",
      "color:black; width:50vw;font-family:helvetica;font-size:1.4rem;",
    );
    div1Paragraph.innerHTML =
      "Pickle Berry Burger is a place where you can chill out and n\
            enjoy your burger and many other snacks and fast foods offered. You can also order our food straight from your n\
            house and it will be delivered in the specified time. It is prepared through a collective of 5 separate ingredients that make n\
            up one of the sweetest burgers you'll come across. The ingredients are bread, cheese, fresh kales, egg yolk and sausage meat.";
    div1.appendChild(div1Paragraph);
    div1.setAttribute(
      "style",
      "height:10rem;background-color:#e7e5e4;padding:5rem;padding-left:12rem;padding-bottom:7rem;",
    );
    return div1;
  }
  function div2() {
    const div2 = document.createElement("div");
    const div2Paragraph = document.createElement("p");
    div2Paragraph.innerHTML = "We are open from Monday to Saturday";
    div2.appendChild(div2Paragraph);
    const div2Paragraph2 = document.createElement("p");
    div2Paragraph2.innerHTML = "Weekdays from 10am to 6am";
    div2.appendChild(div2Paragraph2);
    div2.setAttribute(
      "style",
      "height:10rem;background-color:#ede9fe;padding:3rem;padding-left:20rem;font-family:helvetica;font-size:1.4rem;font-weight:500;",
    );
    return div2;
  }
  function div3() {
    const div3 = document.createElement("div");
    return div3;
  }

  function contentDivs() {
    //contentSide div contains a div(contentDivs) with image and contents in multiple divs
    const contentDivs = document.createElement("div");
    contentDivs.classList.add("contentDivs");
    //contents in the contentDivs
    contentDivs.appendChild(imageDiv());
    contentDivs.appendChild(div1());
    contentDivs.appendChild(div2());

    contentDivs.appendChild(div3());
    contentDivs.setAttribute(
      "style",
      "height:90%;margin:0; background-color:#cbd5e1;margin:0;",
    );
    return contentDivs;
  }

  //contentSide with a class
  function contentSide() {
    const contentSide = document.createElement("div");
    contentSide.classList.add("contentSide");
    contentSide.appendChild(header());
    contentSide.appendChild(contentDivs());
    contentSide.setAttribute(
      "style",
      "width:80vw;overflow-y:auto;display:flex; margin:0; flex-direction:column; height:100vh; gap:0.3vh;margin:0;",
    );
    return contentSide;
  }

  //contentSide div contains header
  function header() {
    const header = document.createElement("h1");
    header.classList.add("header");
    header.setAttribute(
      "style",
      "height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;",
    );
    header.innerHTML = "PICKLE BURGER RESTAURANT";
    return header;
  }

  //content holders
  const contentHolder = document.createElement("div");
  contentHolder.appendChild(sidebar());
  contentHolder.appendChild(contentSide());
  contentHolder.setAttribute(
    "style",
    "display:flex; gap:0.5vw; margin:0; padding:0;margin:0;",
  );

  return contentHolder;
}
