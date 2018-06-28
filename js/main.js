

document.addEventListener('DOMContentLoaded', function() {
  var options = {};
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


$("document").ready(function() {
  $(".dropdown-trigger").dropdown({ hover: false });
  
  var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems,
                                     {
      autoClose: true,
      format: 'dddd, dd-mm-yyyy',
      minDate: new Date()
    });
  
  $('.sidenav').width(window.innerWidth*0.3);
//  window.setInterval(()=>{
//    if($('#side-profile-drop').css('display') === 'block') {
//  $('#side-profile-drop').css('left', 201);
//  console.log($('#side-profile-drop').css('left'));
//  }
//  }, 10);
//  
  
  /*Dropdown Menu*/
$('.people-count').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.count-menu').slideToggle(300);
    });
    $('.people-count').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.count-menu').slideUp(300);
    });
    $('.people-count .count-menu li').click(function () {
        $(this).parents('.people-count').find('span.shown-img').html($(this).html());
        $(this).parents('.people-count').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/
$('select').formSelect();

  enableSelectBoxes();
  
  setHeightFull();
//  $( "#datepicker" ).datepicker({
//    numberOfMonths: 2,
//    dateFormat: "DD, dd-mm-yy"
//  });
//      var h = new Date().getDate();
});


function sideProfileDropShift() {
  window.setTimeout(()=> {
    $('#side-profile-drop').css('left', 201);
    $('#side-profile-drop').css('top', 10);
  }, 0);
  }


function setHeightFull() {
  $('input.select-dropdown').on('click', ()=>{
    setTimeout(()=>{
      console.log($('ul.dropdown-content.select-dropdown').attr('style'));
      $('ul.dropdown-content.select-dropdown').css('height', 'auto');
    }, 0)
  });
}

//autoClose, format, minDate, container
//dddd, dd-mm-yyyy
function enableSelectBoxes(){
    $('div.selectBox').each(function(){
        $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
$(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
      
     $(this).children('span.selected,span.selectArrow').click(function(){
    if($(this).parent().children('div.selectOptions').css('display') == 'none'){
        $(this).parent().children('div.selectOptions').css('display','block');
    }
    else
    {
        $(this).parent().children('div.selectOptions').css('display','none');
    }
});
      $(this).find('span.selectOption').click(function(){
    $(this).parent().css('display','none');
    $(this).closest('div.selectBox').attr('value',$(this).attr('value'));
    $(this).parent().siblings('span.selected').html($(this).html());
});
    });
  
  
}