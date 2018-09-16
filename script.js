// Count of products - items - shopping#product
/*
var count = 0;

for(var i = 0; i < products.items.length; i++) {
  if(products.items[i].kind === "shopping#product") {
    count++
  }
};
console.log(count);


// Print title of all items with products - items - product - inventories - availability - backorder
for(var i = 0; i < products.items.length; i++) {
  if(products.items[i].product.inventories[0].availability === "backorder") {
    console.log(products.items[i].product.title);
  }
};

// Print title of all items with more than one image link (products - items - product - images)
for(var i = 0; i < products.items.length; i++) {
  if(products.items[i].product.images.length > 1) {
    console.log(products.items[i].product.title);
  }
};

// Print all "Canon" products in the items (products - items - product - brand)
for(var i = 0; i < products.items.length; i++) {
  if(products.items[i].product.brand === "Canon") {
    console.log(products.items[i].product.title);
  }
};

// Print all items with author "eBay" and brand "Canon"
for(var i = 0; i < products.items.length; i++) {
  if(products.items[i].product.brand === "Canon" &&
    products.items[i].product.author.name.indexOf("eBay") !== -1) {
    console.log(products.items[i].product.title);
  }
};

// Print all products with their brand, price and an image link


for(var i = 0; i < products.items.length; i++) {
  var brand = products.items[i].product.brand;
  var curr = products.items[i].product.inventories[0].currency;
  var price = products.items[i].product.inventories[0].price;
  var image = products.items[i].product.images[0].link;

  console.log("Brand: " + brand + "\n" + "Price: " + curr + " " + price + "\n" +"Image link: " + image);
};
*/

// User input brand, new/used
var inputBrand = prompt("Which brand would you like to see products from?");
var inputCondition = prompt("Would you like to see new or used items?");
var count = 0;

for(var i = 0; i < products.items.length; i++) {
    var brand = products.items[i].product.brand;
  var curr = products.items[i].product.inventories[0].currency;
  var price = products.items[i].product.inventories[0].price;
  var title = products.items[i].product.title;
  var condition = products.items[i].product.condition;

  if(brand == inputBrand &&
    condition == inputCondition) {
    count++;

    console.log("Item: " + title + "\n" + "Price: " + curr + " " + price);
  }
};

if(count === 0) {
  console.log("Sorry, nothing found");
} else console.log(count + " items were found");
