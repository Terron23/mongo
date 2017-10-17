const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user_test");

//before only needs to connect 1 time
//Basically says when connection is done move in to first test
before((done)=>{

    mongoose.connection
.once('open', () => {done()})
.on("error", (err) => {
console.warn("Warning", err)
});
    
})




//Drops everythng in the database 
//A Hook that empties out each database before the test runs
//Every forEach function has a callback of done
//Tells mocha when a function is done
beforeEach((done)=>{
    //es6 magic to drop daa in multiple collections
    const {users, blogposts, comments} = mongoose.connection.collections
    //Direct reference to the data in our database
users.drop(()=> {
blogposts.drop(()=>{
comments.drop(()=>{



//Ready to run the next test

done()
})
})
});


});

