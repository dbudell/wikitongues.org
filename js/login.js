$(function() {
  logIn()
})

function logIn() {
  $("button.log-in").on("click", function() {
    console.log("log in")
    $(".log-in-fields").addClass("active")
  })

  $("button.go").on("click", function() {
    console.log("log in")
    $(".log-in-fields").removeClass("active")
  })
}