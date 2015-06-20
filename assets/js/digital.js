(function(){
  'use strict'

  setInterval(function(){
    var time = new Date()
    $('.container.alarm').find('span').html(time.toLocaleTimeString())
  }, 500)

  var song = new Audio('assets/dayAndAllNight.mp3');
  song.volume = 0.3;

  $(song).bind('ended', function()  {
      song.currentTime = 0;
      song.play();
  });

  song.play();

}());
