var ball = document.querySelector(".ball");
const c1 = document.querySelector(".c1 h5");


c1.innerHTML = c1.textContent.replace(/\S/g,
"<span>$&</span>");

const element =document.querySelectorAll('span');
for(let i=0;i<element.length;i++)
{
    element[i].style.transform ="rotate("+i*19+"deg)";
}

document.onmousemove = function(){
    var x = event.clientX *100/ window.innerWidth + "%";
    var y = event.clientY * 100/ window.innerHeight + "%";
    console.log(x);
    ball.style.left =x;
    ball.style.top=y;
    ball.style.transform = "translate(-"+x+",-"+y+")";
}
