$(function formFocusListener() {
  var inputPlaceholders = [];

  function onFocusInput() {
    this.placeholder = '';
  }

  function onBlurInput() {
    if (this.value) return false;
    var i = getInputIndex(this);
    this.placeholder = inputPlaceholders[i];
  }

  function getInputIndex(currentInput) {
    var index;
    $(inputs).each(function(i, input) {
      if (input === currentInput ) {
        index = i;
      }
    });
    
    return index;
  }
  
  var inputs = document.querySelectorAll('.js-focus');
  
  $(inputs).each(function(i, input) {
    inputPlaceholders[i] = input.placeholder;
    input.addEventListener('focus', onFocusInput);
    input.addEventListener('blur', onBlurInput);
  });
  
});