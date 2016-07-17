var balloon = $(".balloon");
var counter = 0;
for(var i=0; i<10; i++){
  var balloonCopy = balloon.clone();
  balloonCopy.css({left: i*200});
  balloonCopy.appendTo("body");
  balloonCopy.click(function() {
   $(this).remove();
   counter = counter + 1;
   $(".counter").html(counter);
  });
  balloonCopy.animate({bottom:"100%"}, 8000);
  };
balloon.remove();

// balloon_copy.click(function(){
//           pop_sound.play();
//
// function preloadPopSound(){
//   var audio = new Audio('balloon-pop.mp3');
//   audio.preload = "auto";
//   $(audio).on("loadeddata", start);  // jQuery checking
//   return audio;
// }
// var pop_sound = preloadPopSound();
