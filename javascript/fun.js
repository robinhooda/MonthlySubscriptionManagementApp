$('.newUser').hide();
$('.customerbtn').click(function(){
    $('.customer,.report').hide();
    $('.newUser').show();
});
$('.servicerbtn').click(function(){
    $('.customer,.report').show();
    $('.newUser').hide(); 
});

