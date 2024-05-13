let form=document.getElementsByName("form");
let output=document.querySelector("#output");
let output1=document.querySelector(".output");
let present=document.getElementById("p");
let total=document.getElementById("t");
let bunk=document.getElementById("b");
let extra=document.getElementById("e");
let noOfLecture=document.getElementById("n");
let myChart=document.getElementById("myChart")
let button=document.getElementById("button")
let z=document.createElement("p");
let dropbox=document.getElementById("dropbox");

function data(){
    console.log("data is called")
    let a,x,d,calc,n=0;
    let b=parseInt(total.value)
    d=1/parseInt(noOfLecture.value);
    x=d*(parseInt(extra.value)*2);
    d=d*parseInt(bunk.value);
    a =parseInt(present.value) - d + x
    calc=(a/parseInt(total.value))*100
    if (parseInt(present.value) < 0 || parseInt(total.value) <= 0 || parseInt(present.value) > parseInt(total.value)) {
        return (output.innerHTML= "Proper values please ¯\\_(ツ)_/¯");
    }else{
        calculation(calc,a,b,n)
    }
}

function calculation(calc,a,b,n){
    console.log("calculation is called")
    output.innerHTML=`Attendance Percentage: ${(Math.round((calc* 100)) / 100)}% <br>` 
    if(calc<parseInt(dropbox.value)){
        console.log("less than 75")
        while (((a/b)*100)<=parseInt(dropbox.value)){
            n++,b++,a++
        }
        calc=(a/b)*100
        z.innerHTML=`You need to attend <b>${n}</b> more classes to attain ${(Math.round((calc* 100)) / 100)} attendance.`;
        output1.appendChild(z);
        n=0
    }else if (calc>parseInt(dropbox.value)){
        console.log("greater than 75")
        while (((a/b)*100)>=parseInt(dropbox.value)){
            n++,b++
        }
        b--, n--
        calc=(a/b)*100
        z.innerHTML=`You can bunk for <b>${n}</b> more days. and you attendance will be ${(Math.round((calc* 100)) / 100)}%`;
        output1.appendChild(z);
        n=0
    }
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
