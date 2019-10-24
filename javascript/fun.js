let storeAddress;
let storeMobileno;
let storeUsername;
let jsondata;
$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:2103/",
 }).done(function(data){
     jsondata = data;
     customerlist(jsondata);
     $('.customerinfo').click(function(){
         customerlist(jsondata.username);
         $('.displayinfo').text(jsondata.username);
     })
 })
})
function customerlist(jsondata){
    console.log(jsondata);
}
$('.newUser').hide();
$('.list').hide();
$('.customerbtn').click(function(){
    $('.customer,.report').hide();
    $('.newUser,.list').show();
});
$('.registerbtn').click(function(){
    storeUsername = $('.authusername').val();
    console.log(storeUsername);
    storeAddress = $('.authaddress').val();
    console.log(storeAddress);
    storeMobileno = $('.authmobileno').val();
    console.log(storeMobileno);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:2103/",
        data:{
            'username':storeUsername,
            'address':storeAddress,
            'mobileno':storeMobileno 
        },
        //    success:function(data) {
        //    main = data;
        //     getQues(main);
        // }
    });
})

