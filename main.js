// let myparent = document.createElement("div")
// let mydiv1  = document.createElement("div")
// let mydiv2  = document.createElement("div")
// myparent.setAttribute("class"," flex justify-between z-20")
// mydiv1.setAttribute("class"," w-[50%] bg-blue-600  animate__animated animate__fadeOutLeft")
// mydiv2.setAttribute("class","w-[50%] bg-blue-600  animate__animated animate__fadeOutRight ")
// mydiv1.style.setProperty('--animate-duration', '5s');
// mydiv2.style.setProperty('--animate-duration', '5s');
// myparent.style.position = "absolute";
// myparent.style.top = "0";
// myparent.style.width = "100%";
// myparent.style.height = "100%";
// myparent.appendChild(mydiv1)
// myparent.appendChild(mydiv2)
// window.onload=function(){
//     document.body.appendChild(myparent)
// }
// ............................................................


// ................................................................

index = 0 
let mycontainer = document.querySelectorAll("#div3")
let mycontainer1 = document.querySelectorAll("#div4")

function showdiv(){
    mycontainer.forEach((e)=>{
        e.classList.add("hidden")
        mycontainer1.forEach((ele)=>{
            ele.classList.add("hidden")
        })
    })  
    let currentindex  = mycontainer[index]
    let currentindex2 = mycontainer1[index]
    currentindex.classList.remove("hidden")
    currentindex2.classList.remove("hidden")
    index = [index+1] % mycontainer.length    
    setTimeout(showdiv,5000)
}
showdiv()

// .......................................................

let mylist = document.getElementById("list")
let mybtn1 = document.getElementById("btn1") 
let mycontainer2 = document.getElementById("container2")
mylist.classList.add("hidden")


mybtn1.addEventListener("click",()=>{   
    if(mylist.classList.contains("hidden")){
        mylist.classList.toggle("hidden")
        // mylist.style.zIndex="10"
        mycontainer2.classList.add('animate__animated', 'animate__slideInRight');
    }
    else{
        mylist.classList.toggle("hidden")
        mycontainer2.classList.add('animate__animated', 'animate__slideInLeft');
    }
})
mycontainer2.addEventListener("animationend", () => {
    mycontainer2.classList.remove('animate__animated', 'animate__slideInRight', 'animate__slideInLeft');
});

// ....................................................................

let mynum = document.querySelectorAll("#num")
let mysec = document.getElementById("sec1")
let mydiv3 = document.getElementById("nav")
let mybtn2  = document.getElementById("btn2")

mybtn2.classList.add("hidden")
mybtn2.classList.add('animate__animated', 'animate__zoomIn')
let start = false

mybtn2.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll=function(){
    if(window.scrollY>=200){
        mydiv3.classList.add("fixed") 
        mybtn2.classList.remove("hidden") 
                                           
    }   
    else{
       mydiv3.classList.remove("fixed")   
       mybtn2.classList.add("hidden")
    } 
    if(window.scrollY>=mysec.offsetTop){
        if(!start){
            mynum.forEach((e)=>{counter(e)})
        }
        start = true
    }

}
    function counter(e){
        let goal = e.dataset.goal
       let count = setInterval(()=>{
            e.textContent++
            if(e.textContent == goal){
                clearInterval(count)
            }
        },8000/goal)
    }
    
    // ........................................................................

let mydivs = document.querySelectorAll("#divs");
let mylinks = document.querySelectorAll(".img #divs a")
let myhover = document.querySelectorAll("#hoverer")


mydivs.forEach((div, index) => {
    div.addEventListener("mouseenter", () => {
             if(index === 0){
               
                myhover[index].classList.remove("hidden");
                mylinks[index].classList.remove("hidden");
                mylinks[index].classList.add('animate__animated', 'animate__zoomIn')

            }  
        
            if(index === 1){
                myhover[index].classList.remove("hidden");
                mylinks[index].classList.remove("hidden");  
                mylinks[index].classList.add('animate__animated', 'animate__zoomIn')
            }   
                
                    
            if(index === 2){
                myhover[index].classList.remove("hidden");
                mylinks[index].classList.remove("hidden");
                mylinks[index].classList.add('animate__animated', 'animate__zoomIn')
            } 
                    
            if(index === 3){
                myhover[index].classList.remove("hidden");
                mylinks[index].classList.remove("hidden");
                mylinks[index].classList.add('animate__animated', 'animate__zoomIn')   
            }         
            
       
    });

    div.addEventListener("mouseleave", () => {
        
        if(index === 0){
               
            myhover[index].classList.add("hidden");
            mylinks[index].classList.add("hidden");
        }  
    
        if(index === 1){
            myhover[index].classList.add("hidden");
            mylinks[index].classList.add("hidden");  
                    
        }   
            
                
        if(index === 2){
            myhover[index].classList.add("hidden");
            mylinks[index].classList.add("hidden");
                        
        } 
                
        if(index === 3){
            myhover[index].classList.add("hidden");
            mylinks[index].classList.add("hidden");
                        
        }         
        
    });
});

// .........................................................................
  document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#datepicker", {
      dateFormat: "Y-m-d", // صيغة التاريخ
    //   defaultDate: new Date(), // اليوم الحالي
      allowInput: true // لتفعيل الكتابة اليدوية    
    });
  });

let myinput1 = document.getElementById("div5")
let myi = document.querySelector("#div5 i")
let mypar = document.getElementById("paragraph1")
let mylist1 = document.querySelector(".list")
let myli = document.querySelectorAll(".list div")
mylist1.classList.add("hidden")




myinput1.addEventListener("click",(e)=>{   
    e.currentTarget.classList.toggle("shadow-blue-400")

    mylist1.classList.toggle("hidden")
    mylist1.classList.add('animate__animated', 'animate__fadeIn');

    if(myi.classList.contains("fa-caret-up")){
        myi.setAttribute("class","fa-solid fa-caret-down")
        myi.classList.add('animate__animated', 'animate__bounceIn');

    }else{
        myi.setAttribute("class","fa-solid fa-caret-up")
        myi.classList.add('animate__animated', 'animate__bounceIn');
    }
    
    })

    myi.addEventListener('animationend', () => {
        myi.classList.remove('animate__animated', 'animate__bounceIn')
    });

    myli.forEach((li)=>{
        
        
        li.addEventListener("click",()=>{
            mypar.innerHTML  = li.textContent
            mylist1.classList.toggle("hidden")
            if(myi.classList.contains("fa-caret-up")){
                myi.setAttribute("class","fa-solid fa-caret-down")
                myi.classList.add('animate__animated', 'animate__bounceIn');
        
            }else{
                myi.setAttribute("class","fa-solid fa-caret-up")
                myi.classList.add('animate__animated', 'animate__bounceIn');
            }
            
        })
    })


    let myinput2 = document.getElementById("div6")
    let myi1 = document.querySelector("#div6 i")
    let mypar1 = document.getElementById("paragraph2")
    let mylist2 = document.getElementById("list1")
    let myli1 = document.querySelectorAll("#list1 div")
    mylist2.classList.add("hidden")

   
    myinput2.addEventListener("click",(e)=>{   
        e.currentTarget.classList.toggle("shadow-blue-400")
        mylist2.classList.add('animate__animated', 'animate__fadeIn');
    
        mylist2.classList.toggle("hidden")
    
        if(myi1.classList.contains("fa-caret-up")){
            myi1.setAttribute("class","fa-solid fa-caret-down")
            myi1.classList.add('animate__animated', 'animate__bounceIn');
    
        }else{
            myi1.setAttribute("class","fa-solid fa-caret-up")
            myi1.classList.add('animate__animated', 'animate__bounceIn');
        }
        
        })
    
        myi1.addEventListener('animationend', () => {
            myi1.classList.remove('animate__animated', 'animate__bounceIn')
        });
    
        myli1.forEach((li)=>{
            li.addEventListener("click",()=>{
                mypar1.innerHTML  = li.textContent      
                mylist2.classList.toggle("hidden")
                if(myi1.classList.contains("fa-caret-up")){
                    myi1.setAttribute("class","fa-solid fa-caret-down")
                    myi1.classList.add('animate__animated', 'animate__bounceIn');
            
                }else{
                    myi1.setAttribute("class","fa-solid fa-caret-up")
                    myi1.classList.add('animate__animated', 'animate__bounceIn');
                }
            })
        })


        // .............................................
    

     let myhome1 = document.getElementById("home1")
     let myhome2 = document.getElementById("home2")
    
     myhome2.classList.add("hidden")

     myhome1.addEventListener("mouseenter",()=>{
       myhome2.classList.remove("hidden")
       myhome2.classList.add('animate__animated', 'animate__fadeInDown');
     })
     myhome2.classList.add("hidden")

     myhome1.addEventListener("mouseleave",()=>{
       myhome2.classList.add("hidden")
     })

    //  .......................................................

    let myhome3 = document.querySelectorAll("#home3")
     let myhome4 = document.querySelectorAll("#home4") 

     myhome4.forEach((e,index)=>{
           
            e.classList.add("hidden")
            myhome3.forEach((ele,i)=>{
                ele.addEventListener("mouseenter",()=>{
                if(index === 0 && i === 0){                             
                    e.classList.remove("hidden")
                    e.style.animation = "increaseWidth 1s ease-in-out forwards";
                }
                if(index === 1 && i === 1){                             
                    e.classList.remove("hidden")
                    e.style.animation = "increaseWidth 1s ease-in-out forwards";
                }
                if(index === 2 && i === 2){                             
                    e.classList.remove("hidden")
                    e.style.animation = "increaseWidth 1s ease-in-out forwards";
                }
                if(index === 3 && i === 3){                             
                    e.classList.remove("hidden")
                    e.style.animation = "increaseWidth 1s ease-in-out forwards";
                }
                if(index === 4 && i === 4){                             
                    e.classList.remove("hidden")
                    e.style.animation = "increaseWidth 1s ease-in-out forwards";
                }
                
            })
    })

    })


     myhome4.forEach((e,index)=>{
           
            e.classList.add("hidden")
            myhome3.forEach((ele,i)=>{
                ele.addEventListener("mouseleave",()=>{
                if(index === 0 && i === 0){                            
                    e.classList.add("hidden")
                    e.style.animation = "increaseWidth 0.1s ease-in-out forwards";
                }
                if(index === 1 && i === 1){                            
                    e.classList.add("hidden")
                    e.style.animation = "increaseWidth 0.1s ease-in-out forwards";
                }
                if(index === 2 && i === 2){                            
                    e.classList.add("hidden")
                    e.style.animation = "increaseWidth 0.1s ease-in-out forwards";
                }
                if(index === 3 && i === 3){                            
                    e.classList.add("hidden")
                    e.style.animation = "increaseWidth 0.1s ease-in-out forwards";
                }
                if(index === 4 && i === 4){                            
                    e.classList.add("hidden")
                    e.style.animation = "increaseWidth 0.1s ease-in-out forwards";
                }
                
            })
    })

    })





// 00000000000000000000000000000000000000000000000000000000000000000000


let mybtn3 = document.querySelector(".btn")
let mylist3 = document.getElementById("list2")
mylist3.classList.add("hidden")
mybtn3.addEventListener("click",()=>{
    mylist3.classList.toggle("hidden")   

})







