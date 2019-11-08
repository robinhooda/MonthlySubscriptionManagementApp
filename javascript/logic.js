let totalQuantity=0;
module.exports ={
    findQuantity : function(document){
    console.log(document);
    document.forEach(element => {
        console.log(element.quantity);
        totalQuantity = totalQuantity + element.quantity;
    });
    console.log(totalQuantity);
}
};

