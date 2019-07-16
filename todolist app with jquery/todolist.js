$("ul").on("click", "li", function() {
  //   console.log($(this).css("color"));
  //   if ($(this).css("color") === "rgb(0, 0, 0)") {
  //     $(this).css({ color: "red", backgroundColor: "blue" });
  //   } else {
  //     $(this).css({ color: "black", backgroundColor: "white" });
  //   }
  $(this).toggleClass("complete");
});
$("ul").on("click", "span", function() {
  //   $(this)
  //     .parent()
  //     .remove();
  $(this)
    .parent()
    .fadeOut(500, function(event) {
      $(this).remove();
    });
  event.stopPropagation();
});
$("input[type = 'text']").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $(this).val(""); // this is a setter to clear the input value
    $("ul").append(
      '<li><span><i class="fas fa-trash-alt"></i> </span>' + todoText + "</li>"
    );
  }
});
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
