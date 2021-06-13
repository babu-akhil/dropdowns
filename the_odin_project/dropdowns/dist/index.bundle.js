/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function createNavBar(){

    let body = document.querySelector('body')

    let navBar = document.createElement('div')
    navBar.id = 'navBar'
    navBar.style.display = 'flex'

    navBar.appendChild(createNavBarItem('Item 1'))
    navBar.appendChild(createNavBarItem('Item 2'))
    navBar.appendChild(createNavBarItem('Item 3'))
    navBar.appendChild(createNavBarItem('Item 4'))

    body.appendChild(body)
}

function createNavBarItem(title) {
    let item = document.createElement('div')
    item.classList.add('navBarItem')
    item.innerHTML = title

    return item
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wZG93bnMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCl7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gICAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2QmFyLmlkID0gJ25hdkJhcidcbiAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhckl0ZW0oJ0l0ZW0gMScpKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXJJdGVtKCdJdGVtIDInKSlcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFySXRlbSgnSXRlbSAzJykpXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhckl0ZW0oJ0l0ZW0gNCcpKVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChib2R5KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXJJdGVtKHRpdGxlKSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2QmFySXRlbScpXG4gICAgaXRlbS5pbm5lckhUTUwgPSB0aXRsZVxuXG4gICAgcmV0dXJuIGl0ZW1cbn0iXSwic291cmNlUm9vdCI6IiJ9