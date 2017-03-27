function doWrapHW(sldr) {

  var el = {
        wrap: '.slider-wrap',
        cont: '.slider-cont',
        slide: '.slide'
      }
  
  var gageH = sldr.find(el.cont).height();
  var gageW = sldr.find(el.wrap).width();
  sldr.find(el.wrap).height(gageH);
}

function searchSliders(slType){
  var num = slType.length;
  for ( var i = 0; i < num; ++i) {
    doWrapHW(slType.eq(i));
  }
}

function varSlType() {
  var arrSliderType = [];
  arrSliderType[0] = $('.sl-t1-wrap');
  var numType = arrSliderType.length;
  
  for (var i = 0; i < numType; ++i) {
    searchSliders(arrSliderType[i]);
  }
  
}

function slideMove() {
  var animT = 550;
  var el = {
    cont: '.slider-cont',
    arw: '.sl-arw',
    slider: '.sl-t1-wrap',
    sl: '.slide'
  };
  
  var sup = {
    right: 'fa-angle-right',
    left: 'fa-angle-left'
  };
  
  $(el.arw).mousedown(function clickT1(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    e.preventDefault();
    
    var fa = $(this).find('.fa');
    var workSl = $(this).parents(el.slider);
    
    if (fa.hasClass(sup.right)) {
      
      workSl.find(el.arw).unbind('mousedown',clickT1);
      var cloneSl = workSl.find(el.sl).eq(0).clone();
      workSl.find(el.cont).append(cloneSl);
      
      var moveW = workSl.find(el.sl).outerWidth(true);
      workSl.find(el.sl).css('zIndex','1');
      
      workSl.find(el.cont).animate({
        left: '-' + moveW + 'px'
      },animT,function(){
        workSl.find(el.sl).eq(0).remove();
        workSl.find(el.cont).css('left','0');
        workSl.find(el.sl).removeAttr('style');
        workSl.find(el.arw).bind('mousedown',clickT1);
      });
      
    } else if (fa.hasClass(sup.left)) {
      workSl.find(el.arw).unbind('mousedown',clickT1);
      var cloneSl = workSl.find(el.sl).eq(-1).clone();
      workSl.find(el.cont).prepend(cloneSl);
      
      var moveW = workSl.find(el.sl).outerWidth(true);
      workSl.find(el.cont).css('left', '-' + moveW + 'px');
      workSl.find(el.sl).css('zIndex','1');
      
      workSl.find(el.cont).animate({
        left: '0'
      },animT,function(){
        workSl.find(el.sl).eq(-1).remove();
        workSl.find(el.sl).removeAttr('style');
        workSl.find(el.arw).bind('mousedown',clickT1);
      });
      
    }
    
  });
  
}

$('.sl-arw').click(function(e){
  e.preventDefault();
});

function touchSlideMoveNew(){
  
  var activeTchEl = $('.sl-t1-wrap');
  var moveStartX;
  var moveStartY;
  var timeStartTch;
  
  activeTchEl.bind('touchstart',function(event){
    moveStartX = event.originalEvent.changedTouches[0].pageX;
    moveStartY = event.originalEvent.changedTouches[0].pageY;
    timeStartTch = new Date();
    
  });
  
  activeTchEl.bind('touchend',function(event){
    
    var moveEndX = event.originalEvent.changedTouches[0].pageX;
    var moveEndY = event.originalEvent.changedTouches[0].pageY;
    var timeEndTch = new Date();
      
    var moveX = moveStartX - moveEndX;
    var moveY = moveStartY - moveEndY;
    var moveTime = timeEndTch.getTime() - timeStartTch.getTime()
    
    if (Math.abs(moveX) < 150) return;
    if (Math.abs(moveX) < Math.abs(moveY)) return;
    if (moveTime > 1000) return;
    
    event.preventDefault();
    event.stopPropagation();
    
    if (Math.sign(moveX) == 1) $(this).find('.fa-angle-right').mousedown();
    if (Math.sign(moveX) == -1) $(this).find('.fa-angle-left').mousedown();
    
    if (Math.sign(moveX) == 1) $(this).find('.fa-chevron-right').mousedown();
    if (Math.sign(moveX) == -1) $(this).find('.fa-chevron-left').mousedown();
    
  });
  
}


$(document).ready(function() {
  
  varSlType();
  slideMove();
  touchSlideMoveNew();
  
});

$(window).resize(function() {
  
  varSlType();
  
});