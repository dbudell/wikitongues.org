$(document).ready(function(){
  $("#overlay").append('\
    <form id="contact-form" action="mail.php" method="POST">\
      <h1 class="contactLogotype">WIKITONGUES <span>Contact</span></h1>\
      <span class="close">Close</span>\
      <input id="name" name="name" type="text" placeholder="What&#39;s your name?">\
      <input id="email" name="email" type="text" placeholder="What&#39;s your email?">\
      <textarea id="message" name="message" placeholder="Message"></textarea>\
      <input id="submit" type="submit" value="Send">\
    </form>\
  ')

  $('#contact, footer .footer-contact').on('click', function(){
    contactForm()
  })
})

$(window).resize(function(){
  contactResize()
})

function contactForm() {
  contactResize()
  $('#contact-form').show()
  $('#overlay').fadeIn(150)
  $('#contact-form').addClass('displayed')
  $('body').css('overflow', 'hidden')
  clickContactOut()
  escapeContactOut()
}

function closeContactForm() {
  $('#contact-form').removeClass('displayed')
  $('#overlay').fadeOut(300)
  $('body').css('overflow', 'visible')
  $('#contact-form').hide()
}

function clickContactOut () {
  $('#overlay').on('click', function(e){
    if (e.target.tagName == 'DIV') {
      closeContactForm()
    }
  })
  $('.close').on('click', function(){
    closeContactForm()
  })
}

function escapeContactOut () {
  $('body').on('keydown', function(e){
    if ((e.keyCode || e.which) == 27)
      {
        closeContactForm()
      }
  })
}

function contactResize () {
  var screenHeight = $(window).innerHeight(),
  padding = 20,
  titleComponent = 42,
  inputComponent = 63,
  inputNumber = 2,
  sendComponent = 74,
  usedHeight = padding+titleComponent+(inputComponent*inputNumber)+sendComponent,
  modalHeight = screenHeight - usedHeight

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {
    $('#overlay #contact-form #message').css('height',modalHeight)
  }

}