"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["contacts"],{

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactHeader: () => (/* binding */ contactHeader),
/* harmony export */   contactTabPage: () => (/* binding */ contactTabPage)
/* harmony export */ });
//contentSide div contains header
const contactHeader = (function () {
    const header = document.createElement('h1');
    header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 40%;');
    header.innerHTML = "CONTACT US";
    return header;
})();
const  contactTabPage = (function () {   
//two divs left and right,left =sidebar right = contentSide
    
    function div1 () {
        const div1 = document.createElement('div');
        const div1Border = document.createElement('div');
        div1Border.setAttribute('style','display:flex;justify-content:center;width:55vw;height:60vh; padding:2rem;border:2px #dcd7ee solid;background-color:#9ca3af;border-radius:5rem;');
        div1.appendChild(div1Border);
        const div1Paragraph = document.createElement('p');
        div1Paragraph.setAttribute('style','font-family:helvetica;font-weight:bold;margin:7rem;color:#292524;font-size:1.4rem;color:font-weight:900;margin-left:20%;')
        div1Paragraph.innerHTML = "We are located at Wale's Center n\
        Drive to the 3rd block under Belik House Shop numer 54.n\
        Click Below to Get our Location through Google Map.";
        div1Border.appendChild(div1Paragraph);
        div1.setAttribute('style','height:65vh; background:linear-gradient(30deg,#737373,#d4d4d4,#d4d4d8);padding:4rem;padding-left:8rem;padding-bottom:7rem;')
        return div1;
    }
    function footer () {
        const footer = document.createElement('footer');
        footer.setAttribute('style','background-color:#737373;height:8vh;border-radius:1rem;position:fixed;color:white;top:91.5vh;width:76.5vw;');
        function footerContent () {
            const footerContent = document.createElement('div');
            const footerP = document.createElement('p');
            const footerP2 = document.createElement('p');
            footerP.innerHTML = 'Christopher Nthusi creations';
            footerP2.innerHTML = '@christophernthusi';
            footerContent.setAttribute('style','display:flex;justify-content:space-between;padding-left:2rem;padding-right:2rem;')
            footerContent.appendChild(footerP);
            footerContent.appendChild(footerP2);
            return footerContent;
        }
        footer.appendChild(footerContent());
        return footer;
    }
    //contentSide div contains a div(contentDivs) with image and contents in multiple divs
    const contentDivsHolder = document.createElement('div');
    //contents in the contentDivs  

    contentDivsHolder.appendChild(div1());
    contentDivsHolder.appendChild(footer());
    contentDivsHolder.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;');
    return contentDivsHolder;
    
})();







/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contacts.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuOGExZDc0ZTFlZjZiY2ExZmY2OWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSw4Q0FBOEMsY0FBYyxnQkFBZ0IsZ0JBQWdCLGFBQWEseUJBQXlCLHNCQUFzQjtBQUN4SjtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx1QkFBdUIsV0FBVyxhQUFhLGFBQWEseUJBQXlCLHlCQUF5QixtQkFBbUI7QUFDdkw7QUFDQTtBQUNBLGtFQUFrRSxpQkFBaUIsWUFBWSxjQUFjLGlCQUFpQixzQkFBc0IsZ0JBQWdCO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDBEQUEwRCxhQUFhLGtCQUFrQixvQkFBb0I7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsV0FBVyxtQkFBbUIsZUFBZSxZQUFZLFdBQVcsYUFBYTtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsOEJBQThCLGtCQUFrQixtQkFBbUI7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxVQUFVLHlCQUF5QixTQUFTO0FBQ25HO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRlbnRTaWRlIGRpdiBjb250YWlucyBoZWFkZXJcbmV4cG9ydCBjb25zdCBjb250YWN0SGVhZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OiA4dmg7IG1hcmdpbi10b3A6MDsgbWFyZ2luLXJpZ2h0OjA7IG1hcmdpbi1ib3R0b206MDtjb2xvcjp3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjojNDc1NTY5O3BhZGRpbmc6MnZoIDAgMnZoIDQwJTsnKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJDT05UQUNUIFVTXCI7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn0pKCk7XG5leHBvcnQgY29uc3QgIGNvbnRhY3RUYWJQYWdlID0gKGZ1bmN0aW9uICgpIHsgICBcbi8vdHdvIGRpdnMgbGVmdCBhbmQgcmlnaHQsbGVmdCA9c2lkZWJhciByaWdodCA9IGNvbnRlbnRTaWRlXG4gICAgXG4gICAgZnVuY3Rpb24gZGl2MSAoKSB7XG4gICAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2MUJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYxQm9yZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo1NXZ3O2hlaWdodDo2MHZoOyBwYWRkaW5nOjJyZW07Ym9yZGVyOjJweCAjZGNkN2VlIHNvbGlkO2JhY2tncm91bmQtY29sb3I6IzljYTNhZjtib3JkZXItcmFkaXVzOjVyZW07Jyk7XG4gICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2MUJvcmRlcik7XG4gICAgICAgIGNvbnN0IGRpdjFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRpdjFQYXJhZ3JhcGguc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtZmFtaWx5OmhlbHZldGljYTtmb250LXdlaWdodDpib2xkO21hcmdpbjo3cmVtO2NvbG9yOiMyOTI1MjQ7Zm9udC1zaXplOjEuNHJlbTtjb2xvcjpmb250LXdlaWdodDo5MDA7bWFyZ2luLWxlZnQ6MjAlOycpXG4gICAgICAgIGRpdjFQYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJXZSBhcmUgbG9jYXRlZCBhdCBXYWxlJ3MgQ2VudGVyIG5cXFxuICAgICAgICBEcml2ZSB0byB0aGUgM3JkIGJsb2NrIHVuZGVyIEJlbGlrIEhvdXNlIFNob3AgbnVtZXIgNTQublxcXG4gICAgICAgIENsaWNrIEJlbG93IHRvIEdldCBvdXIgTG9jYXRpb24gdGhyb3VnaCBHb29nbGUgTWFwLlwiO1xuICAgICAgICBkaXYxQm9yZGVyLmFwcGVuZENoaWxkKGRpdjFQYXJhZ3JhcGgpO1xuICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NjV2aDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMzBkZWcsIzczNzM3MywjZDRkNGQ0LCNkNGQ0ZDgpO3BhZGRpbmc6NHJlbTtwYWRkaW5nLWxlZnQ6OHJlbTtwYWRkaW5nLWJvdHRvbTo3cmVtOycpXG4gICAgICAgIHJldHVybiBkaXYxO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb290ZXIgKCkge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOiM3MzczNzM7aGVpZ2h0Ojh2aDtib3JkZXItcmFkaXVzOjFyZW07cG9zaXRpb246Zml4ZWQ7Y29sb3I6d2hpdGU7dG9wOjkxLjV2aDt3aWR0aDo3Ni41dnc7Jyk7XG4gICAgICAgIGZ1bmN0aW9uIGZvb3RlckNvbnRlbnQgKCkge1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlclAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZm9vdGVyUC5pbm5lckhUTUwgPSAnQ2hyaXN0b3BoZXIgTnRodXNpIGNyZWF0aW9ucyc7XG4gICAgICAgICAgICBmb290ZXJQMi5pbm5lckhUTUwgPSAnQGNocmlzdG9waGVybnRodXNpJztcbiAgICAgICAgICAgIGZvb3RlckNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWxlZnQ6MnJlbTtwYWRkaW5nLXJpZ2h0OjJyZW07JylcbiAgICAgICAgICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyUCk7XG4gICAgICAgICAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclAyKTtcbiAgICAgICAgICAgIHJldHVybiBmb290ZXJDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KCkpO1xuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgIH1cbiAgICAvL2NvbnRlbnRTaWRlIGRpdiBjb250YWlucyBhIGRpdihjb250ZW50RGl2cykgd2l0aCBpbWFnZSBhbmQgY29udGVudHMgaW4gbXVsdGlwbGUgZGl2c1xuICAgIGNvbnN0IGNvbnRlbnREaXZzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy9jb250ZW50cyBpbiB0aGUgY29udGVudERpdnMgIFxuXG4gICAgY29udGVudERpdnNIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2MSgpKTtcbiAgICBjb250ZW50RGl2c0hvbGRlci5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgY29udGVudERpdnNIb2xkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo5MCU7bWFyZ2luOjA7IGJhY2tncm91bmQtY29sb3I6I2NiZDVlMTttYXJnaW46MDsnKTtcbiAgICByZXR1cm4gY29udGVudERpdnNIb2xkZXI7XG4gICAgXG59KSgpO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==