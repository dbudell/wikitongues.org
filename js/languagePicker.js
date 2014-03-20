$(function(){
  createLanguageList()
  createLanguageModal()
  textDirection()
  languageOptionsWidth()
  languageModal()
})

var availableLanguage = ["English", "Русский", "العربية", "Español", "Català", "Italiano", "Deutsch", "Afrikaans", "Lietuvių", "עברית", "日本語", "한국어", "isiZulu", "Português"],
  languageLength = availableLanguage.length

function createLanguageList () {
  for (var i = 0; i< 14; i++) {
    $("body").children(".content-wrapper").children(".language-options").append('<li><button class="languageButton" id='+availableLanguage[i]+'>'+availableLanguage[i]+'</button></li>')
  }
}


// text direction handler
function textDirection () {
  var rightToLeft_Languages = ["עברית", "العربية"],
  rightToLeft_Targets = $(".language-options, .logotype, .slogan, #summary, #get-involved, .mobile-text, footer .content-wrapper p, #contact-form #name, #contact-form #email, #contact-form #message, #contact-form #submit")

  $(".languageButton").on("click", function(){
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


// responsive language picker
function languageOptionsWidth () {
  function languageOptionsWidthSet () {
      var content = $(".content-wrapper").width()-45
      $("body").children(".content-wrapper").children(".language-options").css("width",content)
  }
  languageOptionsWidthSet()

  $(window).resize(function(){
    languageOptionsWidthSet()
  })
}


// language picker modal
function createLanguageModal () {
  $(".language-modal").append('\
    <div class="modal-wrapper">\
      <div class="content-wrapper hideLanguageModal">\
        <ul class="language-options"></ul>\
      </div>\
    </div>\
    <div class="background"></div>\
  ')

  for (var i = 0; i< languageLength; i++) {
    $("body .content-wrapper .language-modal .content-wrapper" ).children(".language-options").append('<li><button class="languageButton" id='+availableLanguage[i]+'>'+availableLanguage[i]+'</button></li>')
  }

  // initialize list with first language selected
  $(".languageButton#English").addClass("active")
}


function languageModal () {
  var languageListContent = $("body .content-wrapper .language-modal .content-wrapper"),
  languageListHeight = 2*($(".modal-wrapper .content-wrapper .language-options li button").innerHeight())+61,
  delayTime = 200

  // set appropriate height for modal
  $(".hideLanguageModal").css("margin-top", -languageListHeight)

  // click button
  $(".moreLanguages").on("click", function(){
    $(".language-modal").show()
    // fade in background
    $(".language-modal .background").fadeIn(delayTime)
    // slide down list
    $(".language-modal .modal-wrapper .content-wrapper").addClass("displayLanguageModal").removeClass("hideLanguageModal")
  })


  function closeModal () {
    // fade out background
    $(".language-modal .background").fadeOut(delayTime)
    // slide up list
    $(".language-modal .modal-wrapper .content-wrapper").addClass("hideLanguageModal").removeClass("displayLanguageModal")
    // hide modal so it does not intercept clicks on things below it
    setTimeout(function(){
      $(".language-modal").hide()
    },delayTime)
  }

  // click background
  $(".language-modal .languageButton").on("click", function(){
    closeModal()
  })

  // click on language in modal
  $(".language-modal .background").on("click", function(){
    closeModal()
  })

  // give class of active to selected language
  $('.languageButton').on('click', function(e){
    // get selected language's id
    var selectedLanguage = (e.target || e.srcElement).id

    // reset .active
    $('.active').removeClass('active')

    // add class of active to selected language
    $(".languageButton#"+selectedLanguage).addClass('active')

  })
}