let totalQuantity = 0;
let userTotalQuantity = 0;
module.exports ={
    findQuantity : function(document){
        console.log(document);
        document.forEach(element => {
            // console.log(element.quantity);
            totalQuantity = totalQuantity + element.quantity;
        });
        return totalQuantity;
    },
    findUserQuantity : function(document){
        document.forEach(element=>{
            console.log(element.username);
            if(element.username == element.username){
                userTotalQuantity = userTotalQuantity + element.quantity;
            }
        });
        console.log(userTotalQuantity);
        return userTotalQuantity;
    }
};


