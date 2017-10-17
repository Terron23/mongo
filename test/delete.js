const assert = require("assert");
const User = require("../src/user");
const mongoose = require("mongoose");
//cODE SAYS WHENEVER YOU ARE using a promise just use the es6 implementation
mongoose.Promise = global.Promise
//Muliple ways to delete in Mongo
//Rule 1 Mongo does not use the term delete it uses the term remove
// Mongo has 4 types of removes
//1st Remove is deleeted to an instance ie find joe by id then remove
// 2nd remove deletes all values in a model
//

describe("Deleting a user", ()=>{
let tori;
beforeEach((done)=>{
tori = new User({
    name: "Tori"
})
tori.save().then(()=> done())
});

it("Model instance remove", (done)=>{
tori.remove()
.then(() => { 
    User.findOne({name: 'Tori'})
done();
})
.then((user) =>{
    assert(user === null);
    done();
})

});


it("Remove every user with the name Tori", (done) => {
    //Removes everyne in the database with the name Tori
User.remove({name: "Tori"}).then(() => { 
    User.findOne({name: 'Tori'})
 done();
})
.then((user) =>{
    assert(user === null);
    done();
});
});

it("FindOne and remove", (done)=>{
User.findOneAndRemove({name: "Tori"}).then(() => { 
    User.findOne({name: 'Tori'})
 done();
})
.then((user) =>{
    assert(user === null);
    done();
});

});



});




