let storeAddress;
let storeMobileno;
let storeUsername;
let jsondata;
let currentCount=0;
let store;
let results = "";
let data;
// let compareusername;
// let storeQuantity;
$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:2103/",
 }).done(function(data){
     jsondata = data;
     $('.customerbtn').click(function(){
         customerlist(jsondata);  
     })
 })
})
function customerlist(jsondata){
    console.log(jsondata);
    //Displaying all the customer list
    jsondata.stringify(jsondata).forEach(data => {
      results += `
      
        <ul class="list-group mb-4 shadow-sm">
          <li class="list-group-item bg-dark text-light font-weight-bold">Customer</li>
          <li class="list-group-item">Company: ${data.username}</li>
          <li class="list-group-item">Address: ${data.address}</li>
          <li class="list-group-item">MobileNo: ${data.mobileno}</li>
        </ul>
      `;
    });
    // document.getElementById("output").innerHTML = results;
    $('.displayinfo').html(results);
}
$('.newUser').hide();
$('.list').hide();
$('.customerbtn').click(function(){
    $('.customer,.report').hide();
    $('.newUser,.list').show();
});
// $('.addamount').click(function(){
//     compareusername = $('.matchusername').val();
//     storeQuantity = $('.quantity').val();
//     // console.log(compareusername);
//     jsondata.find(compare=>{
//         // console.log(compare);
//         if(compareusername == compare.username ){
//             // console.log("hello");
//             $.ajax({
//                 type:'PUT',
//                 dataType:'json',
//                 url:'http://localhost:2103/',
//                 data:{
//                     'quantity':storeQuantity
//                 }
//             })
//         }
//     })
    
// })
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
    });
})

