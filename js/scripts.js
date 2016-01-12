$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#computer").prepend("<li>What do you want?</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#computer").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#computer").prepend("<li>Good riddance!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#computer").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#computer").prepend("<li>How dare you!!!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#computer").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
