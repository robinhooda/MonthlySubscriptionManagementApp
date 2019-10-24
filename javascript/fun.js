let storeAddress;
let storeMobileno;
let storeUsername;
let jsondata;
let currentCount=0;
$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:2103/",
 }).done(function(data){
     jsondata = data;
     customerlist(jsondata);
     $('.completeinfo').hide();
     $('.customerinfo').click(function(){
         customerlist(jsondata);  
     })
 })
})
function customerlist(jsondata){
    console.log(jsondata);
    $('.completeinfo').show();
    if(currentCount < 6){
    $('.displayinfo-1').text(jsondata[currentCount].username);
    $('.displayinfo-2').text(jsondata[currentCount].address);
    $('.displayinfo-3').text(jsondata[currentCount].mobileno);
    
    console.log(currentCount);
    }
    currentCount++;
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

