$(function(){
        createLanguageList()
})

function createLanguageList () {
        var availableLanguage = ["English", "Español", "Català", "Italiano", "Deutsch", "Lietuvių", "Português", "Русский", "עברית", "العربية"],
                languageLength = availableLanguage.length

        for (var i = 0; i< languageLength; i++) {
                $(".language-options").append('<li><button id='+availableLanguage[i]+'>'+availableLanguage[i]+'</button></li>')
        }

        $(".language-options").children(":first-child").children("button").addClass("active")
}
