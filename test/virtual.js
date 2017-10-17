//Mocha uses describe and it to test code
const assert = require("assert");
const mongoose = require("mongoose");
//cODE SAYS WHENEVER YOU ARE using a promise just use the es6 implementation
mongoose.Promise = global.Promise
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");


describe("virtual test", ()=>{
    it("Postcount test", (done)=>{
const tori = new User({
    name: "Tori",
    post: [{title: "Im the boss"}]
});
tori.save()
.then(()=> User.findOne({name: "Tori"}))
.then((user)=>{
    assert(tori.postcount === 1)
    console.log(tori.postcount)
    done()
})
    })
})