$(function(){
  createLanguageList()
  textDirection()
})

var availableLanguage = ["English", "Español", "Català", "Italiano", "Deutsch", "Afrikaans", "Lietuvių", "Português", "Русский", "עברית", "العربية"],
  languageLength = availableLanguage.length

function createLanguageList () {
  for (var i = 0; i< languageLength; i++) {
          $(".language-options").append('<li><button id='+availableLanguage[i]+'>'+availableLanguage[i]+'</button></li>')
  }

  $(".language-options").children(":first-child").children("button").addClass("active")
}

function textDirection () {
  var rightToLeft_Languages = ["עברית", "العربية"],
  rightToLeft_Targets = $(".language-options, .logotype, .slogan, #summary, #get-involved, .mobile-text, footer .content-wrapper p, #contact-form #name, #contact-form #email, #contact-form #message, #contact-form #submit")

  $(".language-options li button").on("click", function(){
    for ( var i = 0; i < languageLength; i++ ) {
      if ( $(this).attr("id")==rightToLeft_Languages[i])
        {
          rightToLeft_Targets.addClass("rtl")
          break
        }
        rightToLeft_Targets.removeClass("rtl")
    }
  })
}