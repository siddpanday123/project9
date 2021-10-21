
let flag = 2;

function changeimg(x){
    flag = flag + x;
    show(flag);
}

show(flag);

function show(num){
    let slide = document.getElementsByClassName("slid");

    for(let y of slide){
        y.style.display = "none"; 
    }

    if(num == slide.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slide.length - 1;
        num = slide.length - 1;
    }    
    slide[num].style.display = "block";
}  







































