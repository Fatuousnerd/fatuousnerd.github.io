var field = document.querySelector("textarea"),
backUp = field.getAttribute('placeholder'),
btn = document.querySelector('.btn'),
clear = document.getElementById("clear"),
comment = document.getElementById("comment"),
commented = [],
sid = document.getElementById("comments"),
write = document.getElementById("write"),
User = document.getElementById("User"),
mailinstd = document.getElementById("mailinstd"),
mail = document.getElementById("mail"),
container = document.getElementById("container"),
back = document.getElementById("back");

field.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = "block";
}

field.onblur = function(){
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#aaa';
}

clear.onclick = function(){
    btn.style.display = "none";
    field.value = '';
}

comment.onclick = function(){
    if(!User.value){
        User.style.borderColor = 'red';
        User.style.backgroundColor = '#FFC199';
        User.style.color = '#2c3e50';
        User.style.borderLeft = '9px solid red';
        return
    }
    if(!field.value){
        field.style.borderColor = 'red';
        field.style.backgroundColor = '#FFC199';
        field.style.color = '#2c3e50';
        field.style.borderLeft = '9px solid red';
        return
    }
    localStorage.setItem(User.value, field.value);
}

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    sid.innerHTML += `${key}: ${value}<br />`;
};

window.addEventListener('load', () => {
    localStorage.removeItem('google_experiment_mod44');
})

console.log(localStorage);

var countEl = document.getElementById("counttxt");

updatevisitcount();

function updatevisitcount() {
    fetch('https://api.countapi.xyz/hit/fatuousnerd.github.io/comments.html')
    .then(res => res.json())
    .then(res => {
      countEl.innerText = res.value;
        console.log("Total visits:  " + res.value)
    })
}

mailinstd.onclick = function(){
    mail.classList.add("open");
    container.classList.add('lost');

}

back.onclick = function(){
    mail.classList.remove("open");
    container.classList.remove("lost");
}

//comment.addEventListener('click', (event) => {
  //  commented.push(field.value)
    
//})

//console.log(commented)

