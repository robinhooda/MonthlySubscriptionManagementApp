

// Javascript file 
let jsondata="";
let Quantitydata;
let jsonQuantitydata="";
let store;
let results = "";
let result = "";
let data;

$('.newUser').hide();
$('.list').hide();
$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:2103/",
    }).done(function(data){
        //  console.log(data);
         jsondata = data;
        $('.customerbtn').click(function(){
            $('.customer,.report').hide();
            $('.newUser,.list').show();
            customerlist(jsondata); 
        })
    })
     $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:2103/quantity",
     }).done(function(Quantitydata){
            // console.log(Quantitydata);
            jsonQuantitydata = Quantitydata;
            $('.displayreport').click(function(){
                console.log("hello");
                reportlist(jsonQuantitydata);
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
          <li class="list-group-item">Username: ${data.username}</li>
          <li class="list-group-item">Address: ${data.address}</li>
          <li class="list-group-item">MobileNo: ${data.mobileno}</li>
        </ul>
      `;
    });
    $('.displayinfo').html(results);
}
// Added quantity into database

let compareusername; 
let storeQuantity;
$('.addamount').click(function(){
    compareUsername = $('.matchusername').val();
    storeMonth = $('.matchmonth').val();
    storeQuantity = $('.quantity').val();
    console.log(storeQuantity);
    jsondata.find(compare=>{
        console.log(compare.username);
        if(compareUsername == compare.username){
            console.log("Exist");
            $.ajax({
                type:'POST',
                dataType:'json',
                url:'http://localhost:2103/quantity',
                data:{
                    'username':compareUsername,
                    'month':storeMonth,
                    'quantity':storeQuantity
                },
                success:function(){
                    console.log("success");
                }
            })
        }   
    })
    alert("Data inserted successfully");
})
function reportlist(jsonQuantitydata){
    console.log(jsonQuantitydata);
    //Displaying all record
    jsonQuantitydata.forEach(Quantitydata => {
      result += `
      
        <ul class="list-group mb-4 shadow-sm">
          <li class="list-group-item bg-dark text-light font-weight-bold">Customer</li>
          <li class="list-group-item">Username: ${Quantitydata.username}</li>
          <li class="list-group-item">Month: ${Quantitydata.month}</li>
          <li class="list-group-item">Quantity: ${Quantitydata.quantity}</li>
        </ul>
      `;
    });
    $('.displayreport').html(result);
}
// Added username and address into database
let storeAddress;
let storeMobileno;
let storeUsername;
$('.registerbtn').click(function(){
    storeUsername = $('.authusername').val();
    // console.log(storeUsername);
    storeAddress = $('.authaddress').val();
    // console.log(storeAddress);
    storeMobileno = $('.authmobileno').val();
    // console.log(storeMobileno);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:2103/alldata",
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
