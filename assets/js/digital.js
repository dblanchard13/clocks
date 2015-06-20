(function(){
  'use strict'

  setInterval(function(){
    var time = new Date()
    $('.container.alarm').find('span').html(time.toLocaleTimeString())
  }, 500)

  var song = new Audio('assets/brendanFallis.mp3');
  song.volume = 0.3;
  song.play();

}());
