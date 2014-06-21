$(document).ready(function(){
  $("#overlay").append('\
    <form id="submit-form" action="submit.php" method="POST">\
      <h1 class="contactLogotype">WIKITONGUES</h1>\
      <ul>\
        <li><input id="name" name="name" type="text" placeholder="What&#39;s your name?"></li>\
        <li><input id="email" name="email" type="text" placeholder="What&#39;s your email?"></li>\
        <li><input id="link" name="link" type="text" placeholder="Video File Link (Dropbox, Google Drive, Mediafire)"></li>\
        <li><input id="speaker" name="speaker" type="text" placeholder="What&#39;s the speaker&#39;s name?"></li>\
        <!--<li><p>What languages does this video display?</p></li>-->\
        <li class="video-language last"><input id="language" name="language" type="text" placeholder="What languages does this video display?"></li>\
      </ul>\
      <textarea id="transcription" class="optional" name="transcription" placeholder="Transcription (optional)"></textarea>\
      <textarea id="translation" class="optional" name="translation" placeholder="Translation (optional)"></textarea>\
      <textarea id="message" class="optional" name="message" placeholder="Message (optional)"></textarea>\
      <input id="submit" type="submit" value="Send">\
    </form>\
  ')

  $('#submit, footer .footer-submit').on('click', function(){
    submitForm()
  })

  //languageName()
})

$(window).resize(function(){
  submitResize()
})

function submitForm() {
  submitResize()
  $('#submit-form').show()
  $('#overlay').fadeIn(150)
  $('#submit-form').addClass('displayed')
  $('body').css('overflow', 'hidden')
  clickSubmitOut()
  escapeSubmitOut()
}

function closeSubmitForm() {
  $('#submit-form').removeClass('displayed')
  $('#overlay').fadeOut(300)
  $('body').css('overflow', 'visible')
  $('#submit-form').hide()
}

function clickSubmitOut () {
  $('#overlay').on('click', function(e){
    if (e.target.tagName != 'LI' && e.target.tagName != 'P' && e.target.tagName != 'INPUT' && e.target.tagName != 'H1' && e.target.tagName != 'A' && e.target.tagName != 'TEXTAREA') {
      closeSubmitForm()
    }
  })
}

function escapeSubmitOut () {
  $('body').on('keydown', function(e){
    if ((e.keyCode || e.which) == 27)
      {
        closeSubmitForm()
      }
  })
}

function submitResize () {
  var screenHeight = $(window).innerHeight(),
  modalHeight = (screenHeight - 496)/3

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {
    $('#overlay #submit-form #transcription, #overlay #submit-form #translation, #overlay #submit-form #message').css('height',modalHeight)
  }
}

/*
 * The proverbial pin in Freddie's UI swag
 *

function languageName() {
  var languageCount = $(".video-language").length
  $("li.video-language.last").on("click", function(){
    var newLanguageCount = $(".video-language").length

    if($(this).hasClass('last'))
      {
        $(this).removeClass('last').after('<li class="video-language last"><input type="text" placeholder="Language name"></li>')
      }
    languageName()
  })
}

*/