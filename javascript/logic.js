module.exports ={
    findQuantity : function(document){
        console.log(document);
        var totalQuantity = 0;
        document.forEach(element => {
            // console.log(element.quantity);
            totalQuantity = totalQuantity + element.quantity;
        });
        return totalQuantity;
    },
    findUserQuantity : function(document){
        var userTotalQuantity = 0;
        document.forEach(element=>{
            console.log(element.username);
            userTotalQuantity = userTotalQuantity + element.quantity;
        });
        // milk rate per liter is 51
        userTotalQuantity=userTotalQuantity*51;
        console.log(userTotalQuantity);
        return userTotalQuantity;
    }
};


