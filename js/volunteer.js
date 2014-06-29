$(document).ready(function(){
  $("#overlay").append('\
    <form id="volunteer-form" action="volunteer.php" method="POST">\
      <h1 class="contactLogotype">WIKITONGUES <span>Volunteer</span></h1>\
      <span class="close">Close</span>\
      <input id="name" name="name" type="text" placeholder="What&#39;s your name?">\
      <input id="email" name="email" type="text" placeholder="What&#39;s your email?">\
      <p>How would you like to contribute?</p>\
      <label><input id="ambassador" name="check_list[]" type="checkbox" value="Ambassador">Ambassador</label>\
      <label><input id="socialMedia" name="check_list[]" type="checkbox" value="Social Media">Social Media</label>\
      <label><input id="webDev" name="check_list[]" type="checkbox" value="Web Development">Web Development</label>\
      <textarea id="message" name="message" placeholder="Tell us about yourself"></textarea>\
      <input id="submit" type="submit" value="Send">\
    </form>\
  ')

  $('#volunteer, footer .footer-volunteer').on('click', function(){
    volunteerForm()
  })
})

$(window).resize(function(){
  volunteerResize()
})

function volunteerForm() {
  volunteerResize()
  $('#volunteer-form').show()
  $('#overlay').fadeIn(150)
  $('#volunteer-form').addClass('displayed')
  $('body').css('overflow', 'hidden')
  clickVolunteerOut()
  escapeVolunteerOut()
}

function closeVolunteerForm() {
  $('#volunteer-form').removeClass('displayed')
  $('#overlay').fadeOut(300)
  $('body').css('overflow', 'visible')
  $('#volunteer-form').hide()
}

function clickVolunteerOut () {
  $('#overlay').on('click', function(e){
    if (e.target.tagName != 'FORM' && e.target.tagName != 'H1' && e.target.tagName != 'INPUT' && e.target.tagName != 'P' && e.target.tagName != 'LABEL' && e.target.tagName != 'TEXTAREA') {
      closeVolunteerForm()
    }
  })
}

function escapeVolunteerOut () {
  $('body').on('keydown', function(e){
    if ((e.keyCode || e.which) == 27)
      {
        closeVolunteerForm()
      }
  })
}

function volunteerResize () {
  var screenHeight = $(window).innerHeight(),
  padding = 20,
  titleComponent = 42,
  inputComponent = 63,
  inputNumber = 2,
  hintComponent = 52,
  hintNumber = 1,
  labelComponent = 62,
  labelNumber = 3,
  sendComponent = 74,
  usedHeight = padding+titleComponent+(inputComponent*inputNumber)+(hintComponent*hintNumber)+(labelComponent*labelNumber)+sendComponent,
  modalHeight = screenHeight - usedHeight

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {
    $('#overlay #volunteer-form #message').css('height',modalHeight)
  }

}