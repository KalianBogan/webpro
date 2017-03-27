$(document).ready(function() {
  $("#loadFile").change(function(){
    var fileName = $(this).val().replace(/.*\\/, "");
    $(".fileName span").text(fileName);
    $(".fileName").show();
    
    if (!fileName) {
      $(".fileName").hide();
    }
  });
});