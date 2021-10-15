const cursor= document.querySelector(".cursor");
const anchor =document.querySelectorAll("a");


// custom cursor
window.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y=e.clientY;
    cursor.style.left=`${x}px`;
    cursor.style.top=`${y}px`;
});


// anchor tag hover
anchor.forEach((anch)=>{
    anch.addEventListener("mouseover",()=>{
        cursor.style.transform="scale(2)";
    
        
    });
    anch.addEventListener("mouseleave",()=>{
        cursor.style.transform="";
        
    });
})

// location
// function initialize() {
//     var input = document.getElementById('searchTextField');
//     new google.maps.places.Autocomplete(input);
//   }
  
//   google.maps.event.addDomListener(window, 'load', initialize);

// DropDown
var backdrop =document.querySelector(".backdrop");
var dropbutton =document.querySelector(".food_dropbtn");
var content =document.querySelector(".food_content");


console.log(backdrop);


backdrop.addEventListener('click', function(){
    // mobNav.style.display='none';
    content.classList.remove('open')
    setTimeout(function(){
        backdrop.classList.remove('open');
    },10)
   
});



dropbutton.addEventListener("click", function(){
    content.classList.add("open")
  
    setTimeout(function(){
        backdrop.classList.add('open');
    },10)
 
 
 })

//toggle button:
var backdrop = document.querySelector('.backdrop');
var togglebutton =document.querySelector('.toggle-button');
var mobNav =document.querySelector('.mobile-nav');




// for closing the button:
mobNav.addEventListener('click', function(){
    // mobNav.style.display='none';
    mobNav.classList.remove('open')
  
});



togglebutton.addEventListener('click', function(){
  mobNav.classList.add('open');
  setTimeout(function(){
      backdrop.classList.add('open');
  },10)
  
})
