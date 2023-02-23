let menu = document.querySelector(".fa-bar");

let navBar = document.querySelector("#nav");


menu.onclick = () => {
    // menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');

   
}

const toggle = document.getElementById("darkmode");


     toggle.addEventListener('click', () => {
          
        document.body.classList.toggle('dark');
        document.media.classList.toggle('dark')
     })




window.onscroll = () => {
    navBar.classList.remove('active');
}
