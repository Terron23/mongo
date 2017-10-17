//Mocha uses describe and it to test code
const assert = require("assert");
const mongoose = require("mongoose");
//cODE SAYS WHENEVER YOU ARE using a promise just use the es6 implementation
mongoose.Promise = global.Promise
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");
describe('Creating test records', () => {
    //Mocha sees this code and says oh shit the developer is trying to run somethiing right here
    //If DOne is used as an argument then it must be called
    it('saves a user' , (done) =>{
        //This Tori const has a whole bunch of functions attached to it
        const tori = new User({ name: "Tori"})
        tori.save()
        .then(()=>{
assert(!tori.isNew)
// only after done() will we move on to the next task
done()
        })
    });
});


