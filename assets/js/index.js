document.getElementById('menu-list-buttom').addEventListener('click', function () {
    document.getElementById('menu-sidebar').style.display = 'block';
})

document.getElementById('close-menu-sidebar').addEventListener('click', function () {
    document.getElementById('menu-sidebar').style.display = 'none';
})

document.getElementById('left-navigation').addEventListener('click', function () {
    document.getElementById('services').scroll({
        top: 0,
        left: document.getElementById('services').scrollLeft - window.screen.width,
        behavior: 'smooth'
    });
})

document.getElementById('right-navigation').addEventListener('click', function () {
    document.getElementById('services').scroll({
        top: 0,
        left: document.getElementById('services').scrollLeft + window.screen.width,
        behavior: 'smooth'
    });
})

document.getElementById('up-navigation').addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})


