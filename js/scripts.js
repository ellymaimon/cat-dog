$(document).ready(function() {
  $("button#catbutt").click(function() {
    $("ul#cats").append("<li>Meow</li>");
    $("ul#dogs").append("<li>Woof Woof!</li>");
  });

  $("button#dogbutt").click(function() {
    $("ul#cats").prepend("<li>Mow mow??</li>");
    $("ul#dogs").prepend("<li>Bork bark?</li>");
  });

  $("button#catpic").click(function() {
    $("ul#cats").append("<img src='img/kitty.jpg'>");

    $("ul#cats").children("img").click(function() {
        $(this).remove();
    });
  });






});
