"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad () {   
    //two divs left and right,left =sidebar right = contentSide
    function sidebar () {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.setAttribute('style','background-color:#78716c; width:20vw;margin:0;height:100vh;overflow:hidden;');
    sidebar.appendChild(sideUl());
    return sidebar;
    }


    function sideUl () {
        const sideUl = document.createElement('ul');
        sideUl.setAttribute('style','list-style-type:none;cursor:pointer;color:white;font-weight:bold;height:50vh;display:flex;flex-direction:column;')
        const home = document.createElement('li');
        home.classList.add('home');
        home.innerHTML = 'HOME';    
        home.setAttribute('style','margin-bottom:5vh;')
        const  menu = document.createElement('li');
        menu.classList.add('menu');
        menu.innerHTML = 'MENU';
        menu.setAttribute('style','margin-bottom:5vh;')
        const contacts = document.createElement('li');
        contacts.classList.add('contacts');
        contacts.innerHTML = 'CONTACTS';
        contacts.setAttribute('style','margin-bottom:5vh;')
        sideUl.appendChild(home);
        sideUl.appendChild(menu);
        sideUl.appendChild(contacts);
        return sideUl;
        }


        function imageDiv () {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('imageDiv');
            imageDiv.setAttribute('style','height:75vh;background-size:cover;')
            return imageDiv;
        }
        function div1 () {
            const div1 = document.createElement('div');
            const div1Paragraph = document.createElement('p');
            div1Paragraph.setAttribute('style','color:black; width:50vw;font-family:helvetica;font-size:1.4rem;')
            div1Paragraph.innerHTML = "Pickle Berry Burger is a place where you can chill out and n\
            enjoy your burger and many other snacks and fast foods offered. You can also order our food straight from your n\
            house and it will be delivered in the specified time. It is prepared through a collective of 5 separate ingredients that make n\
            up one of the sweetest burgers you'll come across. The ingredients are bread, cheese, fresh kales, egg yolk and sausage meat.";
            div1.appendChild(div1Paragraph);
            div1.setAttribute('style','height:10rem;background-color:#e7e5e4;padding:5rem;padding-left:12rem;padding-bottom:7rem;')
            return div1;
        }
        function div2 () {
            const div2 = document.createElement('div');
            const div2Paragraph = document.createElement('p');
            div2Paragraph.innerHTML = 'We are open from Monday to Saturday'
            div2.appendChild(div2Paragraph);
            const div2Paragraph2 = document.createElement('p');
            div2Paragraph2.innerHTML = 'Weekdays from 10am to 6am';
            div2.appendChild(div2Paragraph2);
            div2.setAttribute('style','height:10rem;background-color:#ede9fe;padding:3rem;padding-left:20rem;font-family:helvetica;font-size:1.4rem;font-weight:500;')
            return div2;
        }
        function div3 () {
            const div3 = document.createElement('div');
            return div3;
        }

        function contentDivs () {
        //contentSide div contains a div(contentDivs) with image and contents in multiple divs
        const contentDivs = document.createElement('div');
        contentDivs.classList.add('contentDivs');
        //contents in the contentDivs  
        contentDivs.appendChild(imageDiv());
        contentDivs.appendChild(div1());
        contentDivs.appendChild(div2());
        
        contentDivs.appendChild(div3());
        contentDivs.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;');
        return contentDivs;
        }


    //contentSide with a class
    function contentSide () {
        const contentSide = document.createElement('div');
        contentSide.classList.add('contentSide');
        contentSide.appendChild(header());
        contentSide.appendChild(contentDivs());
        contentSide.setAttribute('style','width:80vw;overflow-y:auto;display:flex; margin:0; flex-direction:column; height:100vh; gap:0.3vh;margin:0;');
        return contentSide;
    }


    //contentSide div contains header
    function header () {
        const header = document.createElement('h1');
        header.classList.add('header');
        header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;');
        header.innerHTML = "PICKLE BURGER RESTAURANT";
        return header;
    }

    //content holders
    const contentHolder = document.createElement('div')
    contentHolder.appendChild(sidebar());
    contentHolder.appendChild(contentSide())
    contentHolder.setAttribute('style','display:flex; gap:0.5vw; margin:0; padding:0;margin:0;');

    return contentHolder;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS42NjNkOWM1YmE2ZTc4NzY4MWFiZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxXQUFXLFNBQVMsYUFBYSxnQkFBZ0I7QUFDN0c7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQTBELGVBQWUsWUFBWSxpQkFBaUIsWUFBWSxhQUFhLHNCQUFzQjtBQUNySjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsc0JBQXNCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsV0FBVyxzQkFBc0IsaUJBQWlCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCLGFBQWEsbUJBQW1CLG9CQUFvQjtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5QkFBeUIsYUFBYSxtQkFBbUIsc0JBQXNCLGlCQUFpQixnQkFBZ0I7QUFDcEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFVBQVUseUJBQXlCLFNBQVM7QUFDakc7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQixjQUFjLFVBQVUsdUJBQXVCLGNBQWMsVUFBVSxTQUFTO0FBQ3JKO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWMsZ0JBQWdCLGdCQUFnQixhQUFhLHlCQUF5QixzQkFBc0I7QUFDNUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFdBQVcsVUFBVSxVQUFVLFNBQVM7O0FBRTlGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQgKCkgeyAgIFxuICAgIC8vdHdvIGRpdnMgbGVmdCBhbmQgcmlnaHQsbGVmdCA9c2lkZWJhciByaWdodCA9IGNvbnRlbnRTaWRlXG4gICAgZnVuY3Rpb24gc2lkZWJhciAoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JhY2tncm91bmQtY29sb3I6Izc4NzE2Yzsgd2lkdGg6MjB2dzttYXJnaW46MDtoZWlnaHQ6MTAwdmg7b3ZlcmZsb3c6aGlkZGVuOycpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZVVsKCkpO1xuICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2lkZVVsICgpIHtcbiAgICAgICAgY29uc3Qgc2lkZVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgc2lkZVVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdsaXN0LXN0eWxlLXR5cGU6bm9uZTtjdXJzb3I6cG9pbnRlcjtjb2xvcjp3aGl0ZTtmb250LXdlaWdodDpib2xkO2hlaWdodDo1MHZoO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47JylcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgICAgICBob21lLmlubmVySFRNTCA9ICdIT01FJzsgICAgXG4gICAgICAgIGhvbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ21hcmdpbi1ib3R0b206NXZoOycpXG4gICAgICAgIGNvbnN0ICBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgIG1lbnUuaW5uZXJIVE1MID0gJ01FTlUnO1xuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXJnaW4tYm90dG9tOjV2aDsnKVxuICAgICAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzJyk7XG4gICAgICAgIGNvbnRhY3RzLmlubmVySFRNTCA9ICdDT05UQUNUUyc7XG4gICAgICAgIGNvbnRhY3RzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXJnaW4tYm90dG9tOjV2aDsnKVxuICAgICAgICBzaWRlVWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgICAgIHNpZGVVbC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgc2lkZVVsLmFwcGVuZENoaWxkKGNvbnRhY3RzKTtcbiAgICAgICAgcmV0dXJuIHNpZGVVbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gaW1hZ2VEaXYgKCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2ltYWdlRGl2Jyk7XG4gICAgICAgICAgICBpbWFnZURpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0Ojc1dmg7YmFja2dyb3VuZC1zaXplOmNvdmVyOycpXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VEaXY7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGl2MSAoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXYxUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGl2MVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6YmxhY2s7IHdpZHRoOjUwdnc7Zm9udC1mYW1pbHk6aGVsdmV0aWNhO2ZvbnQtc2l6ZToxLjRyZW07JylcbiAgICAgICAgICAgIGRpdjFQYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJQaWNrbGUgQmVycnkgQnVyZ2VyIGlzIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBjaGlsbCBvdXQgYW5kIG5cXFxuICAgICAgICAgICAgZW5qb3kgeW91ciBidXJnZXIgYW5kIG1hbnkgb3RoZXIgc25hY2tzIGFuZCBmYXN0IGZvb2RzIG9mZmVyZWQuIFlvdSBjYW4gYWxzbyBvcmRlciBvdXIgZm9vZCBzdHJhaWdodCBmcm9tIHlvdXIgblxcXG4gICAgICAgICAgICBob3VzZSBhbmQgaXQgd2lsbCBiZSBkZWxpdmVyZWQgaW4gdGhlIHNwZWNpZmllZCB0aW1lLiBJdCBpcyBwcmVwYXJlZCB0aHJvdWdoIGEgY29sbGVjdGl2ZSBvZiA1IHNlcGFyYXRlIGluZ3JlZGllbnRzIHRoYXQgbWFrZSBuXFxcbiAgICAgICAgICAgIHVwIG9uZSBvZiB0aGUgc3dlZXRlc3QgYnVyZ2VycyB5b3UnbGwgY29tZSBhY3Jvc3MuIFRoZSBpbmdyZWRpZW50cyBhcmUgYnJlYWQsIGNoZWVzZSwgZnJlc2gga2FsZXMsIGVnZyB5b2xrIGFuZCBzYXVzYWdlIG1lYXQuXCI7XG4gICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjFQYXJhZ3JhcGgpO1xuICAgICAgICAgICAgZGl2MS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjEwcmVtO2JhY2tncm91bmQtY29sb3I6I2U3ZTVlNDtwYWRkaW5nOjVyZW07cGFkZGluZy1sZWZ0OjEycmVtO3BhZGRpbmctYm90dG9tOjdyZW07JylcbiAgICAgICAgICAgIHJldHVybiBkaXYxO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpdjIgKCkge1xuICAgICAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2MlBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRpdjJQYXJhZ3JhcGguaW5uZXJIVE1MID0gJ1dlIGFyZSBvcGVuIGZyb20gTW9uZGF5IHRvIFNhdHVyZGF5J1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYyUGFyYWdyYXBoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjJQYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGl2MlBhcmFncmFwaDIuaW5uZXJIVE1MID0gJ1dlZWtkYXlzIGZyb20gMTBhbSB0byA2YW0nO1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYyUGFyYWdyYXBoMik7XG4gICAgICAgICAgICBkaXYyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6MTByZW07YmFja2dyb3VuZC1jb2xvcjojZWRlOWZlO3BhZGRpbmc6M3JlbTtwYWRkaW5nLWxlZnQ6MjByZW07Zm9udC1mYW1pbHk6aGVsdmV0aWNhO2ZvbnQtc2l6ZToxLjRyZW07Zm9udC13ZWlnaHQ6NTAwOycpXG4gICAgICAgICAgICByZXR1cm4gZGl2MjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkaXYzICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJldHVybiBkaXYzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29udGVudERpdnMgKCkge1xuICAgICAgICAvL2NvbnRlbnRTaWRlIGRpdiBjb250YWlucyBhIGRpdihjb250ZW50RGl2cykgd2l0aCBpbWFnZSBhbmQgY29udGVudHMgaW4gbXVsdGlwbGUgZGl2c1xuICAgICAgICBjb25zdCBjb250ZW50RGl2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50RGl2cy5jbGFzc0xpc3QuYWRkKCdjb250ZW50RGl2cycpO1xuICAgICAgICAvL2NvbnRlbnRzIGluIHRoZSBjb250ZW50RGl2cyAgXG4gICAgICAgIGNvbnRlbnREaXZzLmFwcGVuZENoaWxkKGltYWdlRGl2KCkpO1xuICAgICAgICBjb250ZW50RGl2cy5hcHBlbmRDaGlsZChkaXYxKCkpO1xuICAgICAgICBjb250ZW50RGl2cy5hcHBlbmRDaGlsZChkaXYyKCkpO1xuICAgICAgICBcbiAgICAgICAgY29udGVudERpdnMuYXBwZW5kQ2hpbGQoZGl2MygpKTtcbiAgICAgICAgY29udGVudERpdnMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo5MCU7bWFyZ2luOjA7IGJhY2tncm91bmQtY29sb3I6I2NiZDVlMTttYXJnaW46MDsnKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnREaXZzO1xuICAgICAgICB9XG5cblxuICAgIC8vY29udGVudFNpZGUgd2l0aCBhIGNsYXNzXG4gICAgZnVuY3Rpb24gY29udGVudFNpZGUgKCkge1xuICAgICAgICBjb25zdCBjb250ZW50U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50U2lkZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50U2lkZScpO1xuICAgICAgICBjb250ZW50U2lkZS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGNvbnRlbnREaXZzKCkpO1xuICAgICAgICBjb250ZW50U2lkZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnd2lkdGg6ODB2dztvdmVyZmxvdy15OmF1dG87ZGlzcGxheTpmbGV4OyBtYXJnaW46MDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBoZWlnaHQ6MTAwdmg7IGdhcDowLjN2aDttYXJnaW46MDsnKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRTaWRlO1xuICAgIH1cblxuXG4gICAgLy9jb250ZW50U2lkZSBkaXYgY29udGFpbnMgaGVhZGVyXG4gICAgZnVuY3Rpb24gaGVhZGVyICgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDogOHZoOyBtYXJnaW4tdG9wOjA7IG1hcmdpbi1yaWdodDowOyBtYXJnaW4tYm90dG9tOjA7Y29sb3I6d2hpdGU7IGJhY2tncm91bmQtY29sb3I6IzQ3NTU2OTtwYWRkaW5nOjJ2aCAwIDJ2aCAzMCU7Jyk7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIlBJQ0tMRSBCVVJHRVIgUkVTVEFVUkFOVFwiO1xuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIC8vY29udGVudCBob2xkZXJzXG4gICAgY29uc3QgY29udGVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChzaWRlYmFyKCkpO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoY29udGVudFNpZGUoKSlcbiAgICBjb250ZW50SG9sZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OmZsZXg7IGdhcDowLjV2dzsgbWFyZ2luOjA7IHBhZGRpbmc6MDttYXJnaW46MDsnKTtcblxuICAgIHJldHVybiBjb250ZW50SG9sZGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9