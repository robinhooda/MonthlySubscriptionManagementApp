let storeAddress;
let storeMobileno;
let storeUsername;
let jsondata;
let currentCount=0;
let store;
let results = "";
let result = "";
let data;
let compareusername; 
let storeQuantity;
$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:2103/",
 }).done(function(data){
     console.log(data);
     jsondata = data;
     $('.newUser').hide();
     $('.list').hide();
     $('.customerbtn').click(function(){
        $('.customer,.report').hide();
        $('.newUser,.list').show();
         customerlist(jsondata); 
     })
     $('.displayreport').click(function(){
         console.log("hello");
         reportlist(jsondata);
     })
 })
})
function customerlist(jsondata){
    console.log(jsondata);
    //Displaying all the customer list
    jsondata.forEach(data => {
      results += `
      
        <ul class="list-group mb-4 shadow-sm">
          <li class="list-group-item bg-dark text-light font-weight-bold">Customer</li>
          <li class="list-group-item">Company: ${data.username}</li>
          <li class="list-group-item">Address: ${data.address}</li>
          <li class="list-group-item">MobileNo: ${data.mobileno}</li>
        </ul>
      `;
    });
    $('.displayinfo').html(results);
}


$('.addamount').click(function(){
    compareusername = $('.matchusername').val();
    storeQuantity = $('.quantity').val();
    console.log(compareusername);
    jsondata.forEach(compare=>{
        console.log(compare.username);
        if(compareusername === compare.username ){
            console.log("hello");
            // $.ajax({
            //     type:'PUT',
            //     dataType:'json',
            //     url:'http://localhost:2103/',
            //     data:{
            //         'quantity':storeQuantity
            //     }
            // })
        }
    })
    
})
function reportlist(jsondata){
    console.log(jsondata);
    //Displaying all the customer list
    jsondata.forEach(data => {
      result += `
      
        <ul class="list-group mb-4 shadow-sm">
          <li class="list-group-item bg-dark text-light font-weight-bold">Customer</li>
          <li class="list-group-item">Company: ${data.username}</li>
        </ul>
      `;
    });
    $('.displayreport').html(result);
}
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
        success:function(){
            console.log("success");
        }
    });
    alert("Successfully Registered");
})

