$(window).load(function(){
  var listLength = 6909,
  recordedLength = 99,
  recordedPercentage = Math.round(recordedLength/listLength*100)

  for (var i = 1; i <= listLength; i++) {
    $(".list").append('<li>Index '+i+' - Language Name<input type="checkbox" /></li>')
  }

  $("p span.recorded-number").text(recordedLength)
  $("p span.language-number").text(listLength)
  $("p span.percentage").text(recordedPercentage+'%')

  $(".progress-bar").css("width", recordedPercentage+'%')
})