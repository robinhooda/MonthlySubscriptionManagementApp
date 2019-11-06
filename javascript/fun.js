// Javascript file 
let jsondata="";
let Quantitydata;
let jsonQuantitydata="";
let store;
let results = "";
let result = "";
let data;
let validUsername;
$(document).ready(function(){
    $('.newUser').hide();
    $('.list').hide();
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:3217/alldata",
    }).done(function(data){
         jsondata = data;
        $('.customerbtn').click(function(){
            $('.customer,.report').hide();
            $('.newUser,.list').show();
            customerlist(jsondata); 
        });
    });
     $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:3217/quantities",
     }).done(function(Quantitydata){
            // console.log(Quantitydata);
            jsonQuantitydata = Quantitydata;
            $('.displayreport').click(function(){
                console.log("hello");
                reportlist(jsonQuantitydata);
            });
        });
});
// Calling function from click on customer button
function customerlist(jsondata){
    console.log(jsondata);
    validUsername=jsondata.username;
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
    storeDate = $('.matchDate').val();
    storeQuantity = $('.quantity').val();
    console.log(storeQuantity);
    jsondata.find(compare=>{
        console.log(compare.username);
        // if entered username and stored username is same then it will go inside if loop
        if(compareUsername == compare.username){
            console.log("Exist");
            $.ajax({
                type:'POST',
                dataType:'json',
                url:'http://localhost:3217/quantities',
                data:{
                    'username':compareUsername,
                    'date':storeDate,
                    'quantity':storeQuantity
                },
                success:function(){
                    console.log("success");
                }
            });
            alert("Data inserted successfully");
        } 
        alert("Username does not exist");
    });
    
});

// Displayed quantity data
let totalQuantity=0;
function reportlist(jsonQuantitydata){
    console.log(jsonQuantitydata);
    //Displaying all record
    jsonQuantitydata.forEach(Quantitydata => {
        totalQuantity = parseInt(totalQuantity) + parseInt(Quantitydata.quantity);
      result += `
        <ul class="list-group mb-4 shadow-sm">
          <li class="list-group-item bg-dark text-light font-weight-bold">Customer</li>
          <li class="list-group-item">Username: ${Quantitydata.username}</li>
          <li class="list-group-item">Date: ${Quantitydata.date}</li>
          <li class="list-group-item">Quantity: ${Quantitydata.quantity}</li>
        </ul>
      `;
    });
        $('.totalQuan').html(totalQuantity);
    $('.displayreport').html(result);
}
// Checked user already exist or not
let usrname;
let mobile;
$('.loginbtn').click(function(){
    usrname = $('.authusername').val();
    mobile = $('.authmobileno').val();
    jsondata.find(check=>{
        if(usrname==check.username && mobile==check.mobileno){
            alert("Login successfully");
        }
    })
})
// Added username and address into database
let storeAddress;
let storeMobileno;
let storeUsername;
$('.registerbtn').click(function(){
    storeUsername = $('.authusername').val();
    storeAddress = $('.authaddress').val();
    storeMobileno = $('.authmobileno').val();
    if(storeUsername=="" || storeAddress=="" || storeMobileno==""){
        alert("All fields are required");
    }
    else if(jsondata.find(checked=>{
        if(storeUsername==checked.username){return true;}
        else{return false;}
    })){
        alert("Username already exist");
    }
    else{
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://localhost:3217/alldata",
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
    }
});