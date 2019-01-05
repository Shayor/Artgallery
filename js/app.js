
// $(document).ready(function() {  

//     // site preloader -- also uncomment the div in the header and the css style for #preloader
// $(window).load(function(){
//     $('.preloader').fadeOut('slow',function(){$(this).remove();});
// });

// });
M.AutoInit();
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.tooltipped');
//     var instances = M.Tooltip.init(elems, options);
//   });
$(document).ready(function(){
  $('.datepicker').datepicker();
  $('.tooltipped').tooltip();
  $('.dropdown-trigger').dropdown();
  $('.sidenav').sidenav();
});

