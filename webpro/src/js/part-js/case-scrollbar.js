$($('.index-page__mac-window').perfectScrollbar({
  wheelPropagation: true
}));

$(window).resize(function() {
  $('.index-page__mac-window').perfectScrollbar('update');
});