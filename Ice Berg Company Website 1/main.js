$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
    }
  });


  $('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
  });



});

// List of sentences
var _CONTENT = [ "Desktop Application", "Mobile Applications", "Web Development", "Flutter Application" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if(text === _CONTENT[_PART]) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if(text === '') {
    clearInterval(_INTERVAL_VAL);

    // If last sentence then display the first one, else move to the next
    if(_PART == (_CONTENT.length - 1))
      _PART = 0;
    else
      _PART++;
    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

function aboutFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
