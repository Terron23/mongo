const assert = require("assert");
const mongoose = require("mongoose");
//User variable represents users in src folder and represents the entire collection of data in our database
mongoose.Promise = global.Promise
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");


describe("Updating Users", (done) =>{
var tori;
beforeEach((done) =>{
tori = new User({name: "Tori"},{ likes: 0})
tori.save().then(()=> done())

})
function assertN(o, done) {
    o.then(()=>{
User.find({})
.then((users)=>{
assert(users.length ==1)
done()
})
    })
}

it("Update 1", done=>{
console.log(tori +'baby')
//When you call set nothing saves to the database
tori.set('name', 'Tori J')
assertN(tori.save(), done)

})


it("Update 2 bulk", done=>{
//When you call Update it changes a collection of items
assertN(tori.update({name: "Nala"}), done)
console.log(tori +'baby')
})

it('Model Class Update', (done)=>{
//finds all records with the name of Tori and replaces with nala
assertN(
User.update({name: 'Tori'}, {name:'Nala'}), done)
});


it('Model Class Update one record', (done)=>{
    //Great for when you want update a user with unique attributes
User.findOneAndUpdate({name: "Tori"}, {name: 'Pretty Girl'})

done()

});



it('Model Class find record with id and then Update', (done)=>{
assertN(User.findByIdAndUpdate(tori._id,{ name: 'Ms Tori'}), done)    
});
//xit nullifies it statements
it('Mongo Update Modifier Increment BY 1', (done) =>{
    //Lesson in update operators Use when updating multiple rows
    assertN(User.update({name: "Tori"}, {$inc: {likes:289}}).then(()=>{
        User.findOne({name: "Tori"})
        .then((user) =>{
console.log(Object.keys(user)+" " +user.likes)
        })
    }), done)
})
})