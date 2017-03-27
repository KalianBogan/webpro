$(function mobNav() {
  var mobWrap = $( document.createElement('div') ).addClass('mob-nav-wrapper'),
      openBtn = $('.mob-nav-btn'),
      nav = $('.header-nav'),
      rightWrap = $('.index-page-header__right-wrapper'),
      hiddenElemSelectors = ['.header-nav__about', '.header-nav__services', '.header-nav__portfolio', '.header-nav__blog', '.header-nav__contacts', '.header-nav__jobs', '.index-page-header__email', '.index-page-header__phone', '.index-page-header__language'];
  
  openBtn.click(function(e) {
    e.preventDefault();
    open();
  });
  
  document.addEventListener('click', closeBtnHeandler);
                            
  function closeBtnHeandler(e) {
    var target = e.target;
    while (target != document.body) {
      if (target.classList.contains('mob-nav-btn-2')) {
        e.preventDefault();
        close();
        return false;
      }
      target = target.parentElement;
    }
  }
  
  function open() {
    renderMobItems();
    scrollWidthSwitcher('on');
    mobWrap.show();
    
    
    var nativeMobWrap =  document.querySelector('.mob-nav-wrapper');
    nativeMobWrap.addEventListener('transitionend', handler);
    
    function handler() {
      nativeMobWrap.classList.add('opened');
      nativeMobWrap.removeEventListener("transitionend", handler);
    }
    
    setTimeout(function(){
      mobWrap.css('marginRight', '0');
    }, 10);
  }
  
  function close() {
    var nativeMobWrap =  document.querySelector('.mob-nav-wrapper');
    nativeMobWrap.addEventListener('transitionend', handler);
    mobWrap.css('marginRight', '');
    
    function handler() {
      mobWrap.hide();
      scrollWidthSwitcher('reset');
      nativeMobWrap.classList.remove('opened');
      nativeMobWrap.removeEventListener("transitionend", handler);
    }
  }
  
  document.addEventListener('click', outMobNavClickHeandler);
  
  function outMobNavClickHeandler(e) {
    var target = e.target;
    while (target != document.body) {
      if (target.classList.contains('mob-nav-wrapper')) {
        return false;
      }
      target = target.parentElement;
    }
    
    if ( $('.mob-nav-wrapper').hasClass('opened') ) {
      close();
    }
  }
  
  function scrollWidthSwitcher(type) {
    switch (type) {
      case 'on':
        var isScrollPageResult = isScrollPage();
        $("html,body").css("overflow","hidden");
        if ( isScrollPageResult ) {
          $("body").css("marginRight", getScrollWidth() + 'px');
          $(".mob-nav-btn-2").css("marginRight", getScrollWidth() + 'px');
        }
      break;
        
      case 'reset':
        $("html,body").css("overflow","");
        $("body").css("marginRight", "");
         $(".mob-nav-btn-2").css("marginRight", "");
      break;
    }
  }
  
  function isScrollPage() {
    var elem = $('body');
    
    elem.css('overflow', 'auto');
    var w1 = elem.width();
    elem.css('overflow', 'hidden');
    var w2 = elem.width();
    elem.css('overflow', 'auto');
    
    if (w1 != w2) {
      return true;
    }
    
    return false;
  }
  
  function getScrollWidth() {
    var div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    
    return scrollWidth;
  }
  
  function renderMobItems() {
    var hiddenElemCounter = hiddenElemSelectors.length;
    
    $(hiddenElemSelectors).each(function(i, selector) {
      var currentElem =  document.querySelector('.mob-nav-wrapper').querySelector(selector);
      currentElem.style.display = '';
      
      if ( $('.index-page-header ' + selector).css('display') != 'none' ) {
        mobWrap.find(selector).hide();
        --hiddenElemCounter;
      }
    });
    
    return hiddenElemCounter;
  }
  
  function renderMobNav() {
    var closeBtn = document.createElement('a');
    closeBtn.classList.add('mob-nav-btn-2');
    closeBtn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    
    closeBtn = $(closeBtn).attr('href', '#');
    
    nav.clone().appendTo(mobWrap);
    rightWrap.clone().appendTo(mobWrap);
    closeBtn.appendTo(mobWrap);
    
    mobWrap.appendTo( $('body') );
  }
  
  function risizeHeandler() {
    if (mobWrap.css('display') === 'none') {
      return false;
    }
    
    if (!renderMobItems()) {
      mobWrap.hide();
      mobWrap.css('marginRight', '');
      scrollWidthSwitcher('reset');
    }
  }
  
  $(window).resize(function() {
    risizeHeandler();
  });
  
  renderMobNav();
});