  function contactResize () {
    var screenHeight = $(window).innerHeight(),
    modalHeight = screenHeight - (246)
    mobileModalHeight = screenHeight - (246)

    if($(window).width() > 480) {
        $('#overlay #contact-form #message').css('height',modalHeight)
      } else {
        $('#overlay #contact-form #message').css('height',mobileModalHeight)
      }
  }