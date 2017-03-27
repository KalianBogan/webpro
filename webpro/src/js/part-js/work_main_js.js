function indexOneSlider(){
  
  var elForClick = $('.one-pgntn .fa');
  var animTOneSl = 600;
  
  $('.one-pgntn-cont').on('mousedown', 'span', function(e){
    
    if (e.which == 2) return; 
    if (e.which == 3) return;
    var clickEl = $(this);
    
    var spanIndex = clickEl.index();
    
    if (spanIndex == 0) $('.one-pgntn .fa-angle-up').mousedown();
    if (spanIndex == 2) $('.one-pgntn .fa-angle-down').mousedown();
    
  });
  
  elForClick.mousedown(function clickOnePgntn(e){
    
    if (e.which == 2) return; 
    if (e.which == 3) return;
    var clickEl = $(this);
    elForClick.unbind('mousedown', clickOnePgntn);
    
    var nextSl = $('.one-sl-select').index();
    
    if (clickEl.hasClass('fa-angle-up')) {
      
      --nextSl;
      var actvSl = $('.one-slide').eq(nextSl);
      
      actvSl.css({
        'top': '100%',
        'zIndex': '2'
      });
      
      actvSl.animate({
        top: '0'
      },animTOneSl,function(){
        $('.one-slide').removeClass('one-sl-select');
        actvSl.addClass('one-sl-select');
        actvSl.removeAttr('style');
      });
      
      var activeCont = '.one-pgntn-cont';
      var cloneEl = $(activeCont + ' span').eq(-1).clone();
      cloneEl.prependTo(activeCont);
      
      var pgntnItemH = $(activeCont + ' span').outerHeight(true);
      var pgntnItemMT = +parseFloat($(activeCont + ' span').css('marginTop'));
      $(activeCont).css('top','-' + (pgntnItemH-5) + 'px');
      
      $(activeCont + ' span').removeClass('one-pgntn-slct');
      $(activeCont + ' span').eq(1).addClass('one-pgntn-slct');
      
      $(activeCont).animate({
        top: 0
      },animTOneSl,function(){
        $(activeCont + ' span').eq(-1).remove();
        elForClick.bind('mousedown', clickOnePgntn);
      });
      
    } else if (clickEl.hasClass('fa-angle-down')) {
      
      ++nextSl;
      var numOneSl = $('.one-slide').length;
      if (nextSl == numOneSl) nextSl = 0;
        
      var actvSl = $('.one-slide').eq(nextSl);
      
      actvSl.css({
        'top': '-100%',
        'zIndex': '2'
      });
      
      actvSl.animate({
        top: '0'
      },animTOneSl,function(){
        $('.one-slide').removeClass('one-sl-select');
        actvSl.addClass('one-sl-select');
        actvSl.removeAttr('style');
      });
      
      var activeCont = '.one-pgntn-cont';
      var cloneEl = $(activeCont + ' span').eq(0).clone();
      cloneEl.appendTo(activeCont);
      
      var pgntnItemH = $(activeCont + ' span').outerHeight(true);
      var pgntnItemMT = +parseFloat($(activeCont + ' span').css('marginTop'));
      pgntnItemH = pgntnItemH - pgntnItemMT;
      
      $(activeCont + ' span').removeClass('one-pgntn-slct');
      $(activeCont + ' span').eq(2).addClass('one-pgntn-slct');
      
      $(activeCont).animate({
        top: '-' + pgntnItemH + 'px'
      },animTOneSl,function(){
        $(activeCont + ' span').eq(0).remove();
        $(activeCont).css('top', 0);
        elForClick.bind('mousedown', clickOnePgntn);
      });
    }
      
  });
  
}

function indexThreeSlide(){ 
  if ($('.index').length != 1) return;
  var animTimeThree1 = 550;
  var animTimeThree2 = 250;
  var elForClick = $('.three-slide-title');
  var activeEl = $('.three-actv-el');
  var activeRightEl = $('.three-right-slide');
  
  elForClick.eq(0).addClass('three-select-title');
  var selectToTop = elForClick.eq(0).offset().top;
  activeEl.offset({top: selectToTop});
  
  elForClick.mousedown(function clickTrhee(e){
    
    if (e.which == 2) return; 
    if (e.which == 3) return;   
    
    
    if ($(window).width() <= 768) return; 
    var clickEl = $(this);
    var selectItem = $('.three-select-title');
    
    var numClickedItem = clickEl.parents('.thre-ttl-wrap').index();
    var numSelectItem = selectItem.parents('.thre-ttl-wrap').index();    
    if (numClickedItem == numSelectItem) return;
    elForClick.unbind('mousedown', clickTrhee);
    
    selectToTop = selectItem.offset().top;
    var newPstnToTop = clickEl.offset().top;
    var  diffTop = Math.abs(newPstnToTop - selectToTop);
    var activeElOldTop = parseFloat(activeEl.css('top'));
    
    var activeElNewTop = activeElOldTop + diffTop;
    
    if (numClickedItem < numSelectItem) activeElNewTop = activeElOldTop - diffTop;
    
    activeRightEl.removeClass('three-right-slide-select');
    activeRightEl.eq(numClickedItem).addClass('three-right-slide-select');
    
    activeEl.animate({
      boxShadow: '0 4px 7px 0 rgba(0,0,0,.27)'
    },animTimeThree2);
    
    activeEl.animate({
      top: activeElNewTop + 'px'
    },animTimeThree1,function(){
      elForClick.removeClass('three-select-title');
      clickEl.addClass('three-select-title');
      elForClick.bind('mousedown', clickTrhee);
    });
    
    activeEl.animate({
      boxShadow: '0 0 0 0 rgba(0,0,0,.0)'
    },animTimeThree2);
    
    
  });
  
}

function index3SlRsz(){
  var activeEl = $('.three-actv-el');
  if (activeEl.length < 1) return;
  var selectToTop = $('.three-select-title').offset().top;
  activeEl.offset({top: selectToTop});
}

function indexSixSlider(){
  
  var elForClick = $('.six-slide-pgntn .fa');
  var animTSixSl = 700;
  
  $('.six-pgntn-cont').on('mousedown', 'span', function(e){
    
    if (e.which == 2) return; 
    if (e.which == 3) return;
    var clickEl = $(this);
    
    var spanIndex = clickEl.index();
    
    if (spanIndex == 0) $('.six-slide-pgntn .fa-angle-left').mousedown();
    if (spanIndex == 2) $('.six-slide-pgntn .fa-angle-right').mousedown();
    
  });
  
  elForClick.mousedown(function clickSixPgntn(e){

    if (e.which == 2) return; 
    if (e.which == 3) return;
    var clickEl = $(this);
    elForClick.unbind('mousedown', clickSixPgntn);
    
    var nextSl = $('.six-sl-select').index();
    
    if (clickEl.hasClass('fa-angle-right')) {
      
      --nextSl;
      var actvSl = $('.six-slide').eq(nextSl);
      
      actvSl.css({
        'left': '100%',
        'zIndex': '2'
      });
      
      actvSl.animate({
        left: '0'
      },animTSixSl,function(){
        $('.six-slide').removeClass('six-sl-select');
        actvSl.addClass('six-sl-select');
        actvSl.removeAttr('style');
      });
      
      var activeCont = '.six-pgntn-cont';
      var cloneEl = $(activeCont + ' span').eq(-1).clone();
      cloneEl.prependTo(activeCont);
      var pgntnItemW = $(activeCont + ' span').outerWidth(true);
      $(activeCont).css('left','-' + pgntnItemW + 'px');
      
      $(activeCont + ' span').removeClass('six-pgntn-slct');
      $(activeCont + ' span').eq(1).addClass('six-pgntn-slct');
      
      $(activeCont).animate({
        left: 0
      },animTSixSl,function(){
        $(activeCont + ' span').eq(-1).remove();
        elForClick.bind('mousedown', clickSixPgntn);
      });
      
    } else if (clickEl.hasClass('fa-angle-left')) {
      
      ++nextSl;
      var numOneSl = $('.six-slide').length;
      if (nextSl == numOneSl) nextSl = 0;
        
      var actvSl = $('.six-slide').eq(nextSl);
      
      actvSl.css({
        'left': '-100%',
        'zIndex': '2'
      });
      
      actvSl.animate({
        left: '0'
      },animTSixSl,function(){
        $('.six-slide').removeClass('six-sl-select');
        actvSl.addClass('six-sl-select');
        actvSl.removeAttr('style');
      });
      
      var activeCont = '.six-pgntn-cont';
      var cloneEl = $(activeCont + ' span').eq(0).clone();
      cloneEl.appendTo(activeCont);
      
      var pgntnItemW = $(activeCont + ' span').eq(0).outerWidth(true);
      
      $(activeCont + ' span').removeClass('six-pgntn-slct');
      $(activeCont + ' span').eq(2).addClass('six-pgntn-slct');
      
      $(activeCont).animate({
        left: '-' + pgntnItemW + 'px'
      },animTSixSl,function(){
        $(activeCont + ' span').eq(0).remove();
        $(activeCont).css('left', 0);
        elForClick.bind('mousedown', clickSixPgntn);
      });
    }
      
  });
  
}

function indexSevenSlider(){
  
  var elForClick = $('.seven .fa');
  var activeEl = '.seven-slide-cont';
  var slideItem = '.seven-slide';
  var animTSevenSl = 750;
  
  elForClick.mousedown(function clickSevenSl(e){
    
    if (e.which == 2) return; 
    if (e.which == 3) return;
    var clickEl = $(this);
    var moveW = $(activeEl).find('.seven-slide').outerWidth(true);
    
    if (clickEl.hasClass('fa-chevron-right')) {
      
      elForClick.unbind('mousedown', clickSevenSl);
      var cloneEl = $(activeEl).find(slideItem).eq(0).clone();
      cloneEl.appendTo(activeEl);
      
      $(activeEl).animate({
        left: '-' + moveW + 'px'
      },animTSevenSl,function(){
        $(activeEl).find(slideItem).eq(0).remove();
        $(activeEl).css('left', 0);
        elForClick.bind('mousedown', clickSevenSl);
      });
      
    } else if (clickEl.hasClass('fa-chevron-left')) {
      
      elForClick.unbind('mousedown', clickSevenSl);
      
      var cloneEl = $(activeEl).find(slideItem).eq(-1).clone();
      cloneEl.prependTo(activeEl);
      $(activeEl).css('left', '-' + moveW + 'px');
      
      $(activeEl).animate({
        left: 0
      },animTSevenSl,function(){
        $(activeEl).find(slideItem).eq(-1).remove();
        elForClick.bind('mousedown', clickSevenSl);
      })
    }
    
  });
  
}

function clickOnNewsBlock(){
  var elForClick = $('.ten-right-block');
  var newLocation = 'index.html'
  
  elForClick.mousedown(function(){
    location.href = newLocation;
  });
}

function mobNavOpen() {
  
  var cnst = {
    el: {
      forClick: $('.h-top-wrap .fa-bars'),
      actvCont: $('header .mob-nav-cont'),
      actvWrap: $('header .mob-nav')
    },
    supClss: {
      opn: 'mob-nav-on',
      cls: 'mob-nav-off'
    },
    animT: 750
  }
  
  cnst.el.forClick.addClass(cnst.supClss.cls);
  
  cnst.el.forClick.mousedown(function clickMobNav(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    cnst.el.forClick.unbind('mousedown', clickMobNav);
    
    if (cnst.el.forClick.hasClass(cnst.supClss.cls)) {
      
      var actvWrapH = cnst.el.actvCont.outerHeight(true);
      cnst.el.actvWrap.animate({
        height: actvWrapH + 'px'
      },cnst.animT,function(){
        cnst.el.forClick.toggleClass(cnst.supClss.cls + ' ' + cnst.supClss.opn);
        cnst.el.forClick.bind('mousedown', clickMobNav);
      });
      
    } else if (cnst.el.forClick.hasClass(cnst.supClss.opn)) {
    
      cnst.el.actvWrap.animate({
        height: 0
      },cnst.animT,function(){
        cnst.el.actvWrap.removeAttr('style');
        cnst.el.forClick.toggleClass(cnst.supClss.cls + ' ' + cnst.supClss.opn);
        cnst.el.forClick.bind('mousedown', clickMobNav);
      });
      
    }
    
  });
  
}

function sevenSlideW(){
  
  if ($(window).width() > 768) {
    var gageEl = $('.seven-slide-wrap');
    var changeEl = $('.seven-slide');
    
    
    gageEl.removeAttr('style');
    var gageElW = gageEl.width();
    changeEl.width(gageElW);
  }
  
}

function sevenRszWrap(){
  if ($(window).width() <= 768) {
  
    var el ={
        gage: $('.seven .container'),
        wrap: $('.seven-slide-wrap'),
        cont: $('.seven-slide-cont'),
        slide: $('.seven-slide')
    }

    var gageW = el.gage.width();
    el.wrap.width(gageW);
    el.slide.width(gageW);

    var num7Slide = el.slide.length;
    var maxH = 0;

    for (var workI = 0; workI < num7Slide; ++workI) {
      var workH = el.slide.eq(workI).height();
      if (workH > maxH) maxH = workH;
    }

    el.cont.height(maxH);
    el.wrap.height(maxH);
    
  }

}

function threSliderMob(){
  
  var el = {
    forClick: $('.three-slide-title'),
    actve: '.three-right-slide-mob',
    actvLine: $('.three-actv-el')
  }
  
  el.forClick.mousedown(function(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    var clickEl = $(this);
    
  
    if ($(window).width() > 768) return;
    
    el.forClick.removeClass('three-select-title');
    $(el.actve).removeClass('three-right-slide-select');
    
    clickEl.toggleClass('three-select-title');
    var clickWrap = clickEl.parents('.thre-ttl-wrap');
    clickWrap.find(el.actve).toggleClass('three-right-slide-select');
    
    var selectToTop = clickEl.offset().top;
    el.actvLine.offset({top: selectToTop});
    
  });
  
}

function touchSlideMove(){
  
  var activeTchEl = $('.move-tch-wrapp');
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

function prtfMobH(){
  var winW = $(window).width();
  var activeEl = $('.prtf-item-pic-bl-wrap');
  var activeElWrap = $('.prtfl-item');
  
  
  if (activeEl.length < 1) return;
//  activeEl.mousedown(function(e){
//    if (e.which == 2) return; 
//    if (e.which == 3) return;
//    location.href = '#'
//
//  });
  
  if (winW > 768) {
    activeElWrap.removeAttr('style');
    activeEl.removeAttr('style');
    return false;
  }
  
  var activeElW = activeEl.innerWidth();
  var activeElWrapW = activeElWrap.innerWidth();
  var actElM = (winW - activeElWrapW)/2;
  
  activeEl.height(activeElW);
  activeElWrap.css('marginLeft',actElM + 'px');
  
}

function contactsFormInput(){
  
  var el = {
    wrap: '.cntcs-input-wrap',
    inpt: 'input',
    lbl: 'label'
  }
  
  $(el.wrap + ' ' +  el.inpt).focus(function(){
    $(this).parents(el.wrap).find(el.lbl).css('left','100%');
  });
  
  $(el.wrap + ' ' +  el.inpt).blur(function(){
    if ($(this).val() == '') $(this).parents(el.wrap).find(el.lbl).removeAttr('style');
  });
  
}

function contactSelectActv(){
  
  var el = {
    forClick: $('.cntcs-input-right-wrap input'),
    actv: $('.cntcs-input-right-actv-wrap'),
    forH: $('.cntcs-input-right-actv-cont'),
    forSel: $('.cntcs-input-right-actv-cont span'),
    start: $('.cntcs-input-right-start')
  }
  
  var supClass = {
    on: 'cntcs-select-on',
    off: 'cntcs-select-off'
  }
  
  el.forClick.addClass(supClass.off);
  
  el.forClick.mousedown(function(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    
    if ($(this).hasClass(supClass.off)) {
      
      var actvH = el.forH.height();
      el.actv.height(actvH);
      el.forClick.toggleClass(supClass.off + ' ' + supClass.on);
      
    } else if ($(this).hasClass(supClass.on)) {
      
      el.actv.removeAttr('style');
      el.forClick.toggleClass(supClass.off + ' ' + supClass.on);
      
    }
    
  });
  
  el.forSel.mousedown(function(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    el.forClick.val($(this).text());
    el.start.hide();
    el.forClick.mousedown();
  });
  
}

function contactSubmit(){
  
  var el = {
    forClick: $('.cntcs-input-sbmt'),
    actv: $('.cntcs-input-wrap input')
  }
  
  var numActEl = el.actv.length;
  
  el.forClick.mousedown(function(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
  
    for (var iInpt = 0; iInpt < numActEl; ++iInpt) {
      if (el.actv.eq(iInpt).prop('required')) {
        var workItem = el.actv.eq(iInpt);
        workItem.css('borderColor','#f24841');
        workItem.parents('.cntcs-input-wrap').find('.cntcs-input-bd').css('borderColor','#f24841');
        workItem.parents('.cntcs-input-wrap').find('.cntcs-input-error').show();
      }
    }
    
  });
  
}

function incrsHght404() {
  
  var el = {
    cont: $('.page-404-content'),
    page: $('.page-404'),
    win: $(window)
  }
    
  
  var winH = el.win.height();
  var pageH = el.page.height();
  
  if (winH > pageH) {
    var addContH = winH - pageH;
    var contMB = +parseFloat(el.cont.css('paddingBottom'));
    contMB = contMB + addContH;
    el.cont.css('paddingBottom',contMB);
  }
  
}

function activeMap(){
  var el = {
    under: $('.sup-map-block'),
    map: $('#map'),
    wrap: $('.map-block')
  }
  
  var supClass = {
    actv: 'under-map-on',
    disbl: 'under-map-off'
  }
  
  el.wrap.addClass(supClass.actv);
  
  el.under.mousedown(function(e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    
    if (el.wrap.hasClass(supClass.actv)) {
      
      el.under.hide();
      el.wrap.toggleClass(supClass.actv + ' ' + supClass.disbl);
      
    }
    
  });
  
  $(document).mousedown(function (e){
    if (e.which == 2) return; 
    if (e.which == 3) return;
    
    if (!el.wrap.is(e.target)
      && el.wrap.has(e.target).length === 0) {
      
        if (el.wrap.hasClass(supClass.actv)) return;
        el.under.show();
        el.wrap.toggleClass(supClass.actv + ' ' + supClass.disbl);
      
      }
    
  });
  
  
  
}

function fixIndexArrow(){
  if ($('.index').length != 1) return;
  var el = {
    ar: $('.one-bottom'),
    win: $(window),
    one: $('.one'),
    hdr: $('header')
  }
  
  var prop = {
    winH: el.win.height(),
    oneH: el.one.height(),
    oneTop: el.one.offset().top,
    hdrH: el.hdr.height(),
    winTop: el.win.scrollTop()
  }
  
  if (prop.winH >= (prop.oneH + prop.hdrH)) {
    el.ar.removeAttr('style');
    return;
  }
  
  el.ar.css('position','fixed');
  
  if (prop.winTop >= (prop.oneH + prop.hdrH) - prop.winH) el.ar.removeAttr('style');
  
}

$(window).scroll(function(){
  fixIndexArrow();
});

$(document).ready(function(){

  indexOneSlider();
  indexThreeSlide();
  indexSixSlider();
  sevenSlideW();
  indexSevenSlider();
  clickOnNewsBlock();
  mobNavOpen();
  sevenRszWrap();
  threSliderMob();
  touchSlideMove();
  prtfMobH();
  contactsFormInput();
  contactSelectActv();
  contactSubmit();
  incrsHght404();
  activeMap();
  fixIndexArrow();
  
});

$(window).resize(function(){
  
  sevenSlideW();
  index3SlRsz();
  sevenRszWrap();
  prtfMobH();
  
});