$(function() {
  var anchorBtn = $('.js-anchor-btn');
  
  function moveToAnchor(e) {    
    var anchor = $('#' + $(this).attr('href') );
    
    e.preventDefault();
    
    if (anchor.length) {
      var top = anchor.offset().top;
      $('body,html').animate({scrollTop: top}, 500);
    }
  }
  
  anchorBtn.click(moveToAnchor);
});