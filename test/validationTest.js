const assert = require("assert");
const mongoose = require("mongoose");
//User variable represents users in src folder and represents the entire collection of data in our database
mongoose.Promise = global.Promise
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");


describe("Validating a users name", ()=>{

it("More than two characters", (done)=>{
const user = new User({name: 'Tori'});
const validate = user.validateSync()
//const {message} = validate.errors.name
//console.log(message)
console.log(validate)
done()
});

it("Username longer than 2 characters", (done)=>{
    const user = new User({name: 'T'})
    const validate = user.validateSync()
    const {message} = validate.errors.name
    console.log(message)
    done()
})

it('Disallws invalid records', (done)=>{
    const user = new User({name: 'Al'})
    user.save()
    .catch((validationResult)=>{
        const {message} = validationResult.errors.name
        console.log(message)
        done()
    })
})

});