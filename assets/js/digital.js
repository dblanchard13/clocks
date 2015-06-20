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

  $('.play-container').on('click', function(){
    if(song.paused){
      $('.play-container').find('i').text('pause');
      song.play();
    }
    else {
      $('.play-container').find('i').text('play_arrow');
      song.pause();
    }
  });


  $('.mute-container').on('click', function(){
    if(song.volume > 0){
      $('.mute-container').find('i').text('volume_off');
      song.volume = 0;
    }
    else {
      $('.mute-container').find('i').text('volume_up');
      song.volume = 0.3;
    }
  })

}());
