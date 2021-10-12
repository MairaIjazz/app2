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


// slider:

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});
