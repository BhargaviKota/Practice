let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');


burger.addEventListener("click", ()=>{
    menu.classList.toggle("navactive");
    burger.classList.toggle("line");
})

let data = document.querySelector("#item")
let names = ["Only 29% meet unplanned expenses.","41% rely on loans from family/friends to meet unexpected expenses","81% exhaust salary before month end.","59% employees consider flexible access to salary a deciding factor for their next job","80% feel that Covid raised the need for money in hand.","62% unhappy or unsure about financial status"];
      let count = 0;

      function cycleArray() {
        let name = names[count];
        data.innerHTML=name
        count++;
        if (count === names.length) {
          count = 0;
        }
      }

      setInterval(cycleArray, 3000);


let button = document.querySelectorAll(".button, .earn")
button.forEach(btn =>{
    btn.addEventListener("mouseenter",()=>{
        btn.style.transform= "scale(1.05)"
    }
    )    
    btn.addEventListener("mouseleave",()=>{
        btn.style.transform= "scale(1.0)"
    }
    ) 
})

let texts = ["Earned wage access to employees","Financial wellbeing"];
let t_count =0
let index =0
let currentText= "";
let letter ="";

function type() {
    if(t_count === texts.length){
        t_count=0
    }
    currentText= texts[t_count];
    letter = currentText.slice(0,++index);
    document.querySelector("#text").innerHTML= letter;
    if(letter.length === currentText.length){
        t_count++;
        index=0;
    }
}

setInterval(type,500)