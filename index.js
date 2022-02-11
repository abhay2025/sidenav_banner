let slidePosition=0
// let count=0
let timer;
const slides=$('.carouse_item')
const totalslides=slides.length
// console.log(totalslides);
$('#icon_img').click(()=>{
    $('ul').toggleClass('show')
    // $('li').toggleClass('sh')
})

$('#carouse_button_next').click(()=>{
    moveToNextSlide()
    setTimeout("stopShow()", 1000);
})
$('#carouse_button_prev').click(()=>{
    moveToPrevSlide()
    setTimeout(stopShow(), 1000);
}
)
$('.sidenav_button i').click(()=>{
  $('.sidebar').css('width','400px')
   $('.dark-bg').css('display','block')
})

$('.sidebar .fa-xmark').click(()=>{
   
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
})
$('.dark-bg').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
})

// FOR SMALLER SCREEN
$('#icon_img').click(()=>{
    $('.sidebar').css('width','100%')
    $('.dark-bg').css('display','block')
})

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('active')
        slide.classList.add('.carouse-item-hidden')
    }
    slides[slidePosition].classList.add('active')
}

function moveToNextSlide(){
    if(slidePosition===totalslides-1)
    slidePosition=0
    // to move the slide from 3 to 0 position
    else{
    slidePosition++
    }
    updateSlidePosition()
    // setTimeout( changeImageAutomatically(),100000);
    // changeImageAutomatically()
}
function moveToPrevSlide(){
    if(slidePosition===0)
    slidePosition=totalslides-1
    // to move the slide from 3 to 0 position
    else{
        slidePosition--
    }
    updateSlidePosition()
    // setTimeout( changeImageAutomatically(), 100000);
}
function changeImageAutomatically(){
    // if(count==1){
    //     // clearTimeout(timer)
    //     count=0;
    //     return
    // }
    // else{
    //     if(slidePosition===totalslides-1)
    //     slidePosition=0
    //     else{
    //     slidePosition++
    //     }
    //     console.log(slidePosition);     
    //     setTimeout(changeImageAutomatically(),6000);
    // }
    
}
// function stopShow(){
//     count=0
//     change()
// }
// function runShow(){
//     count=1
//     change()
//     // changeImageAutomatically()
// }
// function change(){
//     console.log(count);
//         setTimeout(change(),6000)
       
// }
// window.onload=runShow;
function change(){
    setTimeout(() => {
        if(slidePosition==totalslides-1)
        slidePosition=0
        else{
            slidePosition++
        }
        console.log(slidePosition);
        updateSlidePosition()
    }, 4000);
    // setTimeout("updateSlidePosition()", 2000);
    timer=setTimeout("change()", 5000);
}
function stopShow(){
     clearTimeout(timer)
}
function runShow(){
    
  change()
}
// window.onload=runShow;