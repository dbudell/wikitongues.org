$(document).ready(function(){
  $("#overlay").append('\
    <form id="contact-form" action="mail.php" method="POST">\
      <h1 class="contactLogotype">WIKITONGUES</h1>\
      <input id="name" name="name" type="text" placeholder="What&#39;s your name?">\
      <input id="email" name="email" type="text" placeholder="What&#39;s your email?">\
      <textarea id="message" name="message" placeholder="Whats up?"></textarea>\
      <input id="submit" type="submit" value="Send">\
    </form>\
    ')

  contactForm()
})

$(window).resize(function(){
  contactResize()
})

function contactForm () {
    $('#get-involved').on('click', function(){
    contactResize()
    $('#overlay').fadeIn(150)
    $('#contact-form').addClass('displayed')
    $('body').css('overflow', 'hidden')
    clickOut()
    escapeOut()
  })
}

function clickOut () {
  $('#overlay').on('click', function(e){
    if (e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA') {
      $('#contact-form').removeClass('displayed')
      $(this).fadeOut(300)
      $('body').css('overflow', 'visible')
    }
  })
}

function escapeOut () {
  $('body').on('keydown', function(e){
    if ((e.keyCode || e.which) == 27)
      {
        $('#contact-form').removeClass('displayed')
          $('#overlay').fadeOut(300)
          $('body').css('overflow', 'visible')
      }
  })
}

function contactResize () {
  var screenHeight = $(window).innerHeight(),
  modalHeight = screenHeight - (246)
  mobileModalHeight = screenHeight - (246)

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {
    $('#overlay #contact-form #message').css('height',modalHeight)
  }

  console.log('Hit us up on Github @ https://github.com/wikitongues!')

  // if($(window).width() > 480) {
  //   $('#overlay #contact-form #message').css('height',modalHeight)
  // } else {
  //   $('#overlay #contact-form #message').css('height',mobileModalHeight)
  // }
}
