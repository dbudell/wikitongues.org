$(window).load(function(){
  var listLength = 6909
  for (var i = 0; i < listLength; i++) {
    console.log(i)
    $(".list").append('<li>Language # '+i+'</li>')
  }
})