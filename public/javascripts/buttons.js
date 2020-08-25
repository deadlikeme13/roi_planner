$('.btn-next').click(function(){
  $('.nav-tabs > .nav-item > .active').next('li').find('a').trigger('click');
  console.log("Variable", $('.nav-tabs > .nav-item > .active'));
  console.log("Nav-link", $('.nav-link'));
});

/*console.log($('.nav-tabs'[2]));

var x;
$('.btn-next').click(function(){
  for (x in $('.nav-tabs'[1])) {
    console.log(x);
  }
});*/
  
$('.btn-previous').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});