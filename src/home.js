export default function pageLoad () {
    //content holders
    const contentHolder = document.createElement('div')
    //two divs left and right,left =sidebar right = contentSide
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.setAttribute('style','background-color:#78716c; width:20vw; height:100;');
    const sideUl = document.createElement('ul');
    sideUl.setAttribute('style','list-style-type:none;cursor:pointer;color:white;font-weight:bold;height:50vh;display:flex;flex-direction:column;')
    const home = document.createElement('li');
    home.innerHTML = 'HOME';    
    home.setAttribute('style','margin-bottom:5vh;')
    const  menu = document.createElement('li');
    menu.innerHTML = 'MENU';
    menu.setAttribute('style','margin-bottom:5vh;')
    const contacts = document.createElement('li');
    contacts.innerHTML = 'CONTACTS';
    contacts.setAttribute('style','margin-bottom:5vh;')

    sideUl.appendChild(home);
    sideUl.appendChild(menu);
    sideUl.appendChild(contacts);
    sidebar.appendChild(sideUl);
    //contentSide with a class
    const contentSide = document.createElement('div');
    contentSide.classList.add('contentSide');


    //contentSide div contains header
    const header = document.createElement('h1');
    header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;');
    header.textContent = "PICKLE BURGER RESTAURANT";
    contentSide.appendChild(header);

    //contentSide div contains a div(contentDivs) with image and contents in multiple divs
    const contentDivs = document.createElement('div');

    //contents in the contentDivs
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imageDiv');
    imageDiv.setAttribute('style','height:75vh;background-size:cover;')
    contentDivs.appendChild(imageDiv);
    const div1 = document.createElement('div');
    const div1Paragraph = document.createElement('p');
    div1Paragraph.setAttribute('style','color:black; width:50vw;font-family:helvetica;font-size:1.4rem;')
    div1Paragraph.innerHTML = "Pickle Berry Burger is a place where you can chill out and n\
     enjoy your burger and many other snacky and fast foods offered. You can also order our food straight from your n\
     house and it will be delivered in the specified time. It is prepared through a collective of 5 separate ingredients that make n\
     up one of the sweetest burgers you'll come across. The ingredients are bread, cheese, fresh kales, egg yolk and sausage meat.";
    div1.appendChild(div1Paragraph);
    div1.setAttribute('style','height:10rem;background-color:#e7e5e4;padding:5rem;padding-left:12rem;padding-bottom:7rem;')
    contentDivs.appendChild(div1);
    const div2 = document.createElement('div');
    const div2Paragraph = document.createElement('p');
    div2Paragraph.innerHTML = 'We are open from Monday to Saturday'
    div2.appendChild(div2Paragraph);
    const div2Paragraph2 = document.createElement('p');
    div2Paragraph2.innerHTML = 'Weekdays from 10am to 6am';
    div2.appendChild(div2Paragraph2);
    div2.setAttribute('style','height:10rem;background-color:#ede9fe;padding:3rem;padding-left:20rem;font-family:helvetica;font-size:1.4rem;font-weight:500;')
    contentDivs.appendChild(div2);
    const div3 = document.createElement('div');
    contentDivs.appendChild(div3);
    contentSide.appendChild(header);
    contentSide.appendChild(contentDivs);
    contentDivs.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;')
    contentSide.setAttribute('style','width:80vw; display:flex; margin:0; flex-direction:column; height:auto; gap:0.3vh;margin:0;');

    contentHolder.appendChild(sidebar);
    contentHolder.appendChild(contentSide)
    contentHolder.setAttribute('style','display:flex; gap:0.5vw; margin:0; padding:0;margin:0;');

    return contentHolder;
}