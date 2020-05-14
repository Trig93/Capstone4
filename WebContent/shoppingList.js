let itemArray = [];
let priceArray = [];


function printCart(){
	let i;
	let total = 0;
	for(i=0; i<priceArray.length; i++){
		total += priceArray[i];
	}
	let finalCart = document.getElementById("finalCart");
	finalCart.innerHTML = "total: " + total;
}



function addToCart(pName, pPrice){
	itemArray.push(pName);
	priceArray.push(pPrice);
}

		
