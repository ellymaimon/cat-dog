$(function(){
  var userInputs = ["person", "verb", "object", "verb2", "place"];

  var elements = ["h1", "p", "label"];

  elements.forEach(function(element){
    $(element).click(function(){
      alert("I am a " + element);
    });
  });

  $("form").submit(function(event){
    event.preventDefault();
    userInputs.forEach(function(input){
      var storyInput = $("#" + input).val();
      $("." + input).text(storyInput);
    });
  });
});
