let paras = document.querySelectorAll("p");

function disappear() {
    this.style.opacity = 0;
}

paras.forEach(function (para) {
    para.addEventListener("click", disappear);
});