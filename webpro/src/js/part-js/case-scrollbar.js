$($('.index-page__mac-window').perfectScrollbar());

$(window).resize(function() {
  $('.index-page__mac-window').perfectScrollbar('update');
});