$(document).ready(function () {
  $(".choose").click(function () {
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    $(".number").text($(this).text())
  })

  $(".faq li").click(function () {
    $(this).toggleClass("active")
  })

  $(".to-top").click(function () {
    $('html').scrollTop(0)
  })
})
