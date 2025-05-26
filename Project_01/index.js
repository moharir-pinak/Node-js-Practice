const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON data
app.use(express.json());

// Acquiring the data from the local json file

const users = require("./MOCK_DATA.json")

// Routes


// We should always create a hybrid server so that a modile developer is also able to use the API . 
//  For that we will use the following

// what dose putting api in fronts stand for 
// it says that when we are putting api in front of the users it means that it will provide a json data each time 
app.get("/api/users",(req,res) =>{ // best practice 
    return res.send(users);
})


// by using this method we will be sending the html format to the client
// app.get("/users",(req,res) =>{
//     return res.send(users);
// })


// 1st Method of Writting

// Using the dynamic path parameter for getting a specific user data 
// we will use :id . Here : is the placeholder and id is the name of the variable

app.get("/api/users/:id",(req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
})


// We will not be able to use POST , PUT and DELETE methods in the front end AS the browsers only use the GET request method
// So we will use the POSTMAN to test the POST , PUT and DELETE methods in the back

// For now i will just write them dow here




app.post("/api/users/:id", (req, res) => {
    const body = req.body;
    const id = Number(req.params.id);
    
    // Log the received data
    console.log("Received data:", body);
    
    // Return the received data back to client
    return res.json({
        status: "Success",
        data: body,
        id: id
    });
})

app.patch("/api/users/:id", (req, res) => {
    const body = req.body;
    const id = Number(req.params.id);
    
    // Log the received data
    console.log("Received update data:", body);
    
    // Return the received data back to client
    return res.json({
        status: "Success",
        message: "User updated successfully",
        data: body,
        id: id
    });
})

app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    
    // Log the deletion request
    console.log("Deleting user with ID:", id);
    
    // Return success response
    return res.json({
        status: "Success",
        message: "User deleted successfully",
        id: id
    });
})

// 2nd Method of Writting

// app.route("/api/users/:id")
// .get((req,res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     return res.json(user);
// })
// .post((req,res) =>{
    
//     return res.json({Status :"Pending"});

// })
// .patch((req,res) =>{
    
//     return res.json({Status :"Pending"});
    
// })
// .delete((req,res) =>{
    
//     return res.json({Status :"Pending"});
    
// })




app.listen(PORT ,() => console.log(`Server running on ${PORT}`));