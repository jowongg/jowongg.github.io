var ball = document.querySelector(".ball");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");


c1.innerHTML = c1.textContent.replace(/\S/g,
"<span>$&</span>");
c2.innerHTML = c2.textContent.replace(/\S/g,
"<span>$&</span>");
c3.innerHTML = c3.textContent.replace(/\S/g,
"<span>$&</span>");
c4.innerHTML = c4.textContent.replace(/\S/g,
"<span>$&</span>");

const element =document.querySelectorAll('.c1 span');
for(let i=0;i<element.length;i++)
{
    element[i].style.transform ="rotate("+i*19+"deg)";
}
const element2 =document.querySelectorAll('.c2 span');
for(let i=0;i<element2.length;i++)
{
    element2[i].style.transform ="rotate("+i*12.5+"deg)";
}
const element3 =document.querySelectorAll('.c3 span');
for(let i=0;i<element3.length;i++)
{
    element3[i].style.transform ="rotate("+i*12.5+"deg)";
}
const element4 =document.querySelectorAll('.c4 span');
for(let i=0;i<element4.length;i++)
{
    element4[i].style.transform ="rotate("+i*12.5+"deg)";
}

document.onmousemove = function(){
    var x = event.clientX *100/ window.innerWidth + "%";
    var y = event.clientY * 100/ window.innerHeight + "%";
    console.log(x);
    ball.style.left =x;
    ball.style.top=y;
    ball.style.transform = "translate(-"+x+",-"+y+")";
}
