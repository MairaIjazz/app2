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


