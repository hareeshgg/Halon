// const forms= document.querySelector(".forms"),
//         links= document.querySelectorAll(".link");

// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'flex'
// }

// function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'none'
// }

// function showPage(){
//     const page = document.querySelector('.container');
//     page.style.display = 'flex';
// }

// function hidePage(){
//     const page = document.querySelector('.container');
//     page.style.display = 'none';
// }

// function hideLogin(){
//     const page = document.querySelector('.container-forms');
//     page.style.display = 'none';
// }

// links.forEach(link =>{
//     link.addEventListener('click',e =>{
//         preventDefault(); //preventing form submit
//         forms.classList.toggle("show-signup");
//     })
// })

// Show sidebar
function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

// Hide sidebar
function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

// Show login/signup page
function showPage() {
    document.querySelector('.box').style.display = 'flex';
}

// Hide login/signup page
function hidePage() {
    document.querySelector('.box').style.display = 'none';
}

// Toggle between login and signup forms
document.querySelector('.signup-link').addEventListener('click', () => {
    document.querySelector('.forms').classList.add('show-signup');
});

document.querySelector('.login-link').addEventListener('click', () => {
    document.querySelector('.forms').classList.remove('show-signup');
});
