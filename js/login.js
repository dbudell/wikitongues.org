$(function() {
  logIn()
})

function logIn() {
  $("button.log-in").on("click", function() {
    $(".log-in-fields").addClass("active")
  })

  $("button.go").on("click", function() {
    $(".log-in-fields").removeClass("active")
  })
}