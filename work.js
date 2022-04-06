// credit https://github.com/codingstar-jason/3D-Book-Tutorial-Basic-CodingStar
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const book = document.querySelector(".book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

prevBtn.addEventListener("click",goPrevPage);
nextBtn.addEventListener("click",goNextPage);

let currentLocation =1;
let numOfPairs =3;
let maxLocation = numOfPairs+1;
function openBook(){
    book.style.transform = "translateX(53%)";
    prevBtn.style.transform = "translateX(-230px)";
    nextBtn.style.transform = "translateX(260px)";
}
function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    }
    else{
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(-0px)";
    nextBtn.style.transform = "translateX(-0px)";
}
function goNextPage(){
    if(currentLocation<maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                openBook();
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                openBook();
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
    
}
function goPrevPage(){
    if(currentLocation>1){
        switch(currentLocation){
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                openBook();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
    
}