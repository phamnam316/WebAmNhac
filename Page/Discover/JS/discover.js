let likes = document.querySelectorAll(".rows-container-like");

for (let i = 0; i < 5; i++) {
    likes[i].addEventListener("click", (e) =>{
    e.target.classList.toggle("active");
})}


let follow =document.querySelectorAll(".rows-container-btna")

follow.forEach(btn => {
    btn.addEventListener('click', e => followFollowed(e.target))
});

function followFollowed(button) {
    button.classList.toggle("Gray")
    if(button.innerText == "Follow") button.innerText = 'Followed'
    else button.innerText ='Follow'
}


