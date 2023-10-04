"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   menuTabPage: () => (/* binding */ menuTabPage)
/* harmony export */ });
//contentSide div contains header
    const header = (function () {
        const header = document.createElement('h1');
        header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;');
        header.innerHTML = "PICKLE BURGER MENU";
        return header;
    })();
    const  menuTabPage = (function () {   
    //two divs left and right,left =sidebar right = contentSide
        function imageMenu () {
            const imageMenu = document.createElement('div');
            imageMenu.classList.add('imageMenu');
            imageMenu.setAttribute('style','height:75vh;background-size:cover;loading:lazy;')
            return imageMenu;
        }
        function div1 () {
            const div1 = document.createElement('div');
            const div1Border = document.createElement('div');
            div1Border.setAttribute('style','height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #86efac solid;background-color:#c7d2fe;border-radius:5rem;');
            const div1Img = document.createElement('div');
            div1Img.classList.add('div1Img');
            div1Img.setAttribute('style','margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;');
           
            div1.appendChild(div1Border);
            const div1Paragraph = document.createElement('p');
            div1Paragraph.setAttribute('style','color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;')
            div1Paragraph.innerHTML = "Cheese Burger";
            div1Border.appendChild(div1Paragraph);
            div1Border.appendChild(div1Img);
            div1.setAttribute('style','height:65vh;background-color:#e7e5e4;padding:4rem;padding-left:8rem;padding-bottom:7rem;')
            return div1;
        }
        function div2 () {
            const div2 = document.createElement('div');
            const div2Border = document.createElement('div');
            div2Border.setAttribute('style','height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #fb7185 solid;background-color:#78716c;border-radius:5rem;');
            const div2Img = document.createElement('div');
            div2Img.classList.add('div2Img');
            div2Img.setAttribute('style','margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;');
           
            div2.appendChild(div2Border);
            const div2Paragraph = document.createElement('p');
            div2Paragraph.innerHTML = 'Cherry Burger';
            div2Border.appendChild(div2Paragraph);
            div2Border.appendChild(div2Img);
            div2Paragraph.setAttribute('style','color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;')

            div2.setAttribute('style','height:65vh;background-color:#ede9fe;padding:4rem;padding-left:8rem;font-family:helvetica;font-size:1.4rem;font-weight:500;padding-bottom:7rem;')
            return div2;
        }
        function div3 () {
            const div3 = document.createElement('div');
            const div3Border = document.createElement('div');
            div3Border.setAttribute('style','height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #fb923c solid;background-color:#d9f99d;border-radius:5rem;');
            const div3Img = document.createElement('div');
            div3Img.classList.add('div3Img');
            div3Img.setAttribute('style','margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;');
           
            div3.appendChild(div3Border);
            const div3Paragraph = document.createElement('p');
            div3Paragraph.innerHTML = 'Hotdog burger';
            div3Border.appendChild(div3Paragraph);
            div3Border.appendChild(div3Img);
            div3Paragraph.setAttribute('style','color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;')

            div3.setAttribute('style','height:65vh;background-color:#f5f5f4;padding:4rem;padding-left:8rem;font-family:helvetica;font-size:1.4rem;font-weight:500;padding-bottom:7rem;')
            
            return div3;
        }

        function footer () {
            const footer = document.createElement('footer');
            footer.setAttribute('style','background-color:#cbd5e1;height:10vh;border-radius:1rem;position:fixed;top:89vh;width:76.5vw;');
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
        contentDivsHolder.appendChild(imageMenu());
        contentDivsHolder.appendChild(div1());
        contentDivsHolder.appendChild(div2());
        
        contentDivsHolder.appendChild(div3());
        contentDivsHolder.appendChild(footer());
        contentDivsHolder.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;');
        return contentDivsHolder;
        
    })();

    



   

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS4zNmM3N2JlYzAxMjE0NzhhOTRmOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBVztBQUNYO0FBQ0Esa0RBQWtELGNBQWMsZ0JBQWdCLGdCQUFnQixhQUFhLHlCQUF5QixzQkFBc0I7QUFDNUo7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsc0JBQXNCLGFBQWE7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0IsV0FBVyxhQUFhLDRCQUE0Qix5QkFBeUIsbUJBQW1CO0FBQzFLO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCLHVCQUF1QixhQUFhLFlBQVksbUJBQW1CO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxzQkFBc0IsaUJBQWlCLHNCQUFzQixnQkFBZ0I7QUFDMUk7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHlCQUF5QixhQUFhLGtCQUFrQixvQkFBb0I7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0IsV0FBVyxhQUFhLDRCQUE0Qix5QkFBeUIsbUJBQW1CO0FBQzFLO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCLHVCQUF1QixhQUFhLFlBQVksbUJBQW1CO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxzQkFBc0IsaUJBQWlCLHNCQUFzQixnQkFBZ0I7O0FBRTFJLG1EQUFtRCx5QkFBeUIsYUFBYSxrQkFBa0Isc0JBQXNCLGlCQUFpQixnQkFBZ0Isb0JBQW9CO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCLFdBQVcsYUFBYSw0QkFBNEIseUJBQXlCLG1CQUFtQjtBQUMxSztBQUNBO0FBQ0Esc0RBQXNELDJCQUEyQix1QkFBdUIsYUFBYSxZQUFZLG1CQUFtQjtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsc0JBQXNCLGlCQUFpQixzQkFBc0IsZ0JBQWdCOztBQUUxSSxtREFBbUQseUJBQXlCLGFBQWEsa0JBQWtCLHNCQUFzQixpQkFBaUIsZ0JBQWdCLG9CQUFvQjtBQUN0TDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRSxZQUFZLG1CQUFtQixlQUFlLFNBQVMsYUFBYTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsOEJBQThCLGtCQUFrQixtQkFBbUI7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsVUFBVSx5QkFBeUIsU0FBUztBQUN2RztBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY29udGVudFNpZGUgZGl2IGNvbnRhaW5zIGhlYWRlclxuICAgIGV4cG9ydCBjb25zdCBoZWFkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDogOHZoOyBtYXJnaW4tdG9wOjA7IG1hcmdpbi1yaWdodDowOyBtYXJnaW4tYm90dG9tOjA7Y29sb3I6d2hpdGU7IGJhY2tncm91bmQtY29sb3I6IzQ3NTU2OTtwYWRkaW5nOjJ2aCAwIDJ2aCAzMCU7Jyk7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIlBJQ0tMRSBCVVJHRVIgTUVOVVwiO1xuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH0pKCk7XG4gICAgZXhwb3J0IGNvbnN0ICBtZW51VGFiUGFnZSA9IChmdW5jdGlvbiAoKSB7ICAgXG4gICAgLy90d28gZGl2cyBsZWZ0IGFuZCByaWdodCxsZWZ0ID1zaWRlYmFyIHJpZ2h0ID0gY29udGVudFNpZGVcbiAgICAgICAgZnVuY3Rpb24gaW1hZ2VNZW51ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW1hZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ2ltYWdlTWVudScpO1xuICAgICAgICAgICAgaW1hZ2VNZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NzV2aDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7bG9hZGluZzpsYXp5OycpXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VNZW51O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpdjEgKCkge1xuICAgICAgICAgICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2MUJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2MUJvcmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjYwdmg7IG1hcmdpbi1sZWZ0OjIwJTt3aWR0aDozMHZ3O3BhZGRpbmc6MnJlbTtib3JkZXI6MC41cmVtICM4NmVmYWMgc29saWQ7YmFja2dyb3VuZC1jb2xvcjojYzdkMmZlO2JvcmRlci1yYWRpdXM6NXJlbTsnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdjFJbWcuY2xhc3NMaXN0LmFkZCgnZGl2MUltZycpO1xuICAgICAgICAgICAgZGl2MUltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnbWFyZ2luOmF1dG87YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyOyBoZWlnaHQ6MjByZW07d2lkdGg6MjByZW07Ym9yZGVyLXJhZGl1czoycmVtOycpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2MUJvcmRlcik7XG4gICAgICAgICAgICBjb25zdCBkaXYxUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGl2MVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6YmxhY2s7IGZvbnQtZmFtaWx5OmhlbHZldGljYTtmb250LXNpemU6MS40cmVtO2NvbG9yOmZvbnQtd2VpZ2h0OjkwMDttYXJnaW4tbGVmdDoyMCU7JylcbiAgICAgICAgICAgIGRpdjFQYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJDaGVlc2UgQnVyZ2VyXCI7XG4gICAgICAgICAgICBkaXYxQm9yZGVyLmFwcGVuZENoaWxkKGRpdjFQYXJhZ3JhcGgpO1xuICAgICAgICAgICAgZGl2MUJvcmRlci5hcHBlbmRDaGlsZChkaXYxSW1nKTtcbiAgICAgICAgICAgIGRpdjEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo2NXZoO2JhY2tncm91bmQtY29sb3I6I2U3ZTVlNDtwYWRkaW5nOjRyZW07cGFkZGluZy1sZWZ0OjhyZW07cGFkZGluZy1ib3R0b206N3JlbTsnKVxuICAgICAgICAgICAgcmV0dXJuIGRpdjE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGl2MiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXYyQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYyQm9yZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NjB2aDsgbWFyZ2luLWxlZnQ6MjAlO3dpZHRoOjMwdnc7cGFkZGluZzoycmVtO2JvcmRlcjowLjVyZW0gI2ZiNzE4NSBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiM3ODcxNmM7Ym9yZGVyLXJhZGl1czo1cmVtOycpO1xuICAgICAgICAgICAgY29uc3QgZGl2MkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2MkltZy5jbGFzc0xpc3QuYWRkKCdkaXYySW1nJyk7XG4gICAgICAgICAgICBkaXYySW1nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXJnaW46YXV0bztiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IGhlaWdodDoyMHJlbTt3aWR0aDoyMHJlbTtib3JkZXItcmFkaXVzOjJyZW07Jyk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYyQm9yZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkaXYyUGFyYWdyYXBoLmlubmVySFRNTCA9ICdDaGVycnkgQnVyZ2VyJztcbiAgICAgICAgICAgIGRpdjJCb3JkZXIuYXBwZW5kQ2hpbGQoZGl2MlBhcmFncmFwaCk7XG4gICAgICAgICAgICBkaXYyQm9yZGVyLmFwcGVuZENoaWxkKGRpdjJJbWcpO1xuICAgICAgICAgICAgZGl2MlBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6YmxhY2s7IGZvbnQtZmFtaWx5OmhlbHZldGljYTtmb250LXNpemU6MS40cmVtO2NvbG9yOmZvbnQtd2VpZ2h0OjkwMDttYXJnaW4tbGVmdDoyMCU7JylcblxuICAgICAgICAgICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjY1dmg7YmFja2dyb3VuZC1jb2xvcjojZWRlOWZlO3BhZGRpbmc6NHJlbTtwYWRkaW5nLWxlZnQ6OHJlbTtmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTtmb250LXdlaWdodDo1MDA7cGFkZGluZy1ib3R0b206N3JlbTsnKVxuICAgICAgICAgICAgcmV0dXJuIGRpdjI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGl2MyAoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXYzQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYzQm9yZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NjB2aDsgbWFyZ2luLWxlZnQ6MjAlO3dpZHRoOjMwdnc7cGFkZGluZzoycmVtO2JvcmRlcjowLjVyZW0gI2ZiOTIzYyBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiNkOWY5OWQ7Ym9yZGVyLXJhZGl1czo1cmVtOycpO1xuICAgICAgICAgICAgY29uc3QgZGl2M0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2M0ltZy5jbGFzc0xpc3QuYWRkKCdkaXYzSW1nJyk7XG4gICAgICAgICAgICBkaXYzSW1nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXJnaW46YXV0bztiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IGhlaWdodDoyMHJlbTt3aWR0aDoyMHJlbTtib3JkZXItcmFkaXVzOjJyZW07Jyk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgZGl2My5hcHBlbmRDaGlsZChkaXYzQm9yZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjNQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkaXYzUGFyYWdyYXBoLmlubmVySFRNTCA9ICdIb3Rkb2cgYnVyZ2VyJztcbiAgICAgICAgICAgIGRpdjNCb3JkZXIuYXBwZW5kQ2hpbGQoZGl2M1BhcmFncmFwaCk7XG4gICAgICAgICAgICBkaXYzQm9yZGVyLmFwcGVuZENoaWxkKGRpdjNJbWcpO1xuICAgICAgICAgICAgZGl2M1BhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6YmxhY2s7IGZvbnQtZmFtaWx5OmhlbHZldGljYTtmb250LXNpemU6MS40cmVtO2NvbG9yOmZvbnQtd2VpZ2h0OjkwMDttYXJnaW4tbGVmdDoyMCU7JylcblxuICAgICAgICAgICAgZGl2My5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjY1dmg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY0O3BhZGRpbmc6NHJlbTtwYWRkaW5nLWxlZnQ6OHJlbTtmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTtmb250LXdlaWdodDo1MDA7cGFkZGluZy1ib3R0b206N3JlbTsnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGl2MztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZvb3RlciAoKSB7XG4gICAgICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYmFja2dyb3VuZC1jb2xvcjojY2JkNWUxO2hlaWdodDoxMHZoO2JvcmRlci1yYWRpdXM6MXJlbTtwb3NpdGlvbjpmaXhlZDt0b3A6ODl2aDt3aWR0aDo3Ni41dnc7Jyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBmb290ZXJDb250ZW50ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBmb290ZXJQLmlubmVySFRNTCA9ICdDaHJpc3RvcGhlciBOdGh1c2kgY3JlYXRpb25zJztcbiAgICAgICAgICAgICAgICBmb290ZXJQMi5pbm5lckhUTUwgPSAnQGNocmlzdG9waGVybnRodXNpJztcbiAgICAgICAgICAgICAgICBmb290ZXJDb250ZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1sZWZ0OjJyZW07cGFkZGluZy1yaWdodDoycmVtOycpXG4gICAgICAgICAgICAgICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXJQKTtcbiAgICAgICAgICAgICAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclAyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9vdGVyQ29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KCkpO1xuICAgICAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnRlbnRTaWRlIGRpdiBjb250YWlucyBhIGRpdihjb250ZW50RGl2cykgd2l0aCBpbWFnZSBhbmQgY29udGVudHMgaW4gbXVsdGlwbGUgZGl2c1xuICAgICAgICBjb25zdCBjb250ZW50RGl2c0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL2NvbnRlbnRzIGluIHRoZSBjb250ZW50RGl2cyAgXG4gICAgICAgIGNvbnRlbnREaXZzSG9sZGVyLmFwcGVuZENoaWxkKGltYWdlTWVudSgpKTtcbiAgICAgICAgY29udGVudERpdnNIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2MSgpKTtcbiAgICAgICAgY29udGVudERpdnNIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2MigpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnREaXZzSG9sZGVyLmFwcGVuZENoaWxkKGRpdjMoKSk7XG4gICAgICAgIGNvbnRlbnREaXZzSG9sZGVyLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICAgICAgY29udGVudERpdnNIb2xkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo5MCU7bWFyZ2luOjA7IGJhY2tncm91bmQtY29sb3I6I2NiZDVlMTttYXJnaW46MDsnKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnREaXZzSG9sZGVyO1xuICAgICAgICBcbiAgICB9KSgpO1xuXG4gICAgXG5cblxuXG4gICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=