$(document).ready(function() {
  var container = $('.portfolio__item-container ul');
    
  $('.content-filter a').click(function(e){      
    if ( !$(this).parents('li').hasClass('filter-active') ) {
      $(this).parents('ul').find('.filter-active').removeClass('filter-active');
      $(this).parents('li').addClass('filter-active');
    }
    var selector = $(this).attr('data-filter');
    container.isotope({ itemSelector: '.filtered-item', filter: selector });
    return false;
  });
  
  function init() {
    if ($('.portfolio__item-container').length) {
      $('main').css('display', 'block');
    }
    $(".content-filter [data-filter='*']").click();
  }
  
  init();
});