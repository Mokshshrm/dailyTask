
const closeBtn = document.getElementById('side-bar-close-btn');

const sideBarBtn = document.getElementById('side-bar-btn');

const sideBar = document.getElementById('side-bar-container');

closeBtn.addEventListener('click', (event) => {

    sideBar.style.visibility = 'hidden';
    sideBar.style.transition = 'none';
    sideBar.style.cursor = '';
    sideBar.style.animation = 'none';

})

sideBarBtn.addEventListener('click', (event) => {
    sideBar.style.animation = 'side-bar-container-animation 1s';
    sideBar.style.visibility = 'visible';
    sideBar.style.cursor = 'pointer';
})

