import './style.css'

function createNavBar(){

    let body = document.querySelector('body')

    let navBar = document.createElement('div')
    navBar.id = 'navBar'
    navBar.style.display = 'flex'

    navBar.appendChild(createNavBarItem('Item 1',['Blah', 'Bloo']))
    navBar.appendChild(createNavBarItem('Item 2',['Hello', 'World']))
    navBar.appendChild(createNavBarItem('Item 3',['Yo', 'Yo', 'Yoo']))
    navBar.appendChild(createNavBarItem('Item 4',['Grr', 'Brr', 'Stop reading these']))

    body.appendChild(navBar)

    let textContent = document.createElement('div')
    textContent.id = 'textContent'

    textContent.innerHTML = 'lorem ipsum datum bling blong kitty cat grr brr meow wow doge '.repeat(50)
    body.appendChild(textContent)
}

function createNavBarItem(title, menuContent) {
    let item = document.createElement('div')
    item.classList.add('navBarItem')
    let itemTitle = document.createElement('div')
    itemTitle.classList.add('itemTitle')
    item.appendChild(itemTitle)
    itemTitle.innerHTML = title
    itemTitle.style.width = '100px'

    let menu = document.createElement('div')
    menu.classList.add('menu')
    menuContent.forEach(item => {
        let menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')
        menuItem.innerHTML = item
        menuItem.style.minWidth = '100px'
        console.log()
        menu.appendChild(menuItem)
    })

    item.addEventListener('click' ,()=> {
        menu.style.height = '200px'
    })

    item.addEventListener('mouseleave', () => {
        menu.style.height = '0px'
    });

    item.appendChild(menu)

    return item
}

createNavBar()