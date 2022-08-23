//function readJson(){
    const fs = require("fs");
   
    // Read users.json file
    fs.readFile("repository/products.json", function(err, data) {
      
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const products = JSON.parse(data);
    
    console.log(products[0].name);
});
//}