var balloon = $(".balloon");
var counter = 0;



function start () {
  for(var i=0; i<20; i++){
    var balloonCopy = balloon.clone();
    balloonCopy.css({left: i*100});
    balloonCopy.appendTo("body");

    balloonCopy.click(function() {
      pop_sound.play();
      $(this).remove();
      counter = counter + 1;
      $(".counter").html(counter);
    });
    balloonCopy.animate({bottom: "100%", left: Math.random() * 100 + "%" }, 16000 - Math.random() * 4000);
    };
  balloon.remove();
}


function preloadPopSound(){
  var audio = new Audio('fireball.wav');
  audio.preload = "auto";
  $(audio).on("loadeddata", start);
  return audio;
}
var pop_sound = preloadPopSound();
