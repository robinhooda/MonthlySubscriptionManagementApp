let storeAddress;
let storeMobileno;
let storeUsername;
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

