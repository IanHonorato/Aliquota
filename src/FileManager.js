export function readJson(fileName){
    const fs = require("fs");
   
    fs.readFile("repository/" + fileName + ".json", function(err, data) {
        if (err) throw err;
    
        const objects = JSON.parse(data);
        return objects;
    });
}

export function writeJson(fileName, object){
    const fs = require("fs");
    const objects = require("repository/" + fileName + ".json");
   
    objects.push(object);
    
    fs.writeFile("repository/" + fileName + ".json", JSON.stringify(object), err => {
        if (err) throw err; 
    });
}