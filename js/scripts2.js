$(function(){
  var userInputs = ["person", "verb", "object", "verb2", "place"];

  $("form").submit(function(event){
    event.preventDefault();
    userInputs.forEach(function(input){
      var storyInput = $("#" + input).val();
      $("." + input).text(storyInput);
    });
  });
});
