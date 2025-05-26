// console.log("Hello World");

// for file handling we will be using the fs module 

const fs = require('fs');

// For the creation of a new file we use chronous in nature 
// This command was synchronous in nature 
// fs.writeFileSync("./01_Hello_Program/file_handling.txt","File created by fs module . Successfully");

// Now turn for Asynchronous file handling                  

// fs.writeFile("./01_Hello_Program/file_handling.txt","ReWritten the File created by fs module . Successfully",
//     function(err) {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File created successfully");
//         }
//     }
// );

//  reading file

// Reading file synchronously
// const syncData = fs.readFileSync("./01_Hello_Program/file_handling.txt", "utf-8");
// console.log("Sync read data:", syncData);

// Reading file asynchronously
// fs.readFile("./01_Hello_Program/file_handling.txt", "utf-8", function(err, data) {
//     if(err) {
//         console.log("Error reading file:", err);
//     } else {
//         console.log("Async read data:", data);
//     }
// });

fs.appendFileSync("./01_Hello_Program/file_handling.txt","This is the data that is appended to the file");



