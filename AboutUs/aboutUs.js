function darkmode() {
    document.getElementsByClassName('container_main')[0].classList.toggle("background_content");
    document.getElementsByClassName('nav')[0].classList.toggle("background_nav");
    document.getElementsByClassName('content')[0].classList.toggle("dark");
    
    const length_name_item = document.getElementsByClassName('name_darkmode').length;

    const name_item = document.getElementsByClassName('name_darkmode');

    for (let j = 0; j < length_name_item; j++) 
    {
        name_item[j].classList.toggle("white");
    }
}

function onclickMenu()
{
    var menu = document.querySelector(".nav");
    if (menu.style.display == "none")
    {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}