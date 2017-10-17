const assert = require("assert");
const mongoose = require("mongoose");
//User variable represents users in src folder and represents the entire collection of data in our database

const User = require("../src/user");
describe('Inserting test records', () => {
    let tori, mariah, kayla, daniese;
  //beforeEach allows us to enter a user within our user record circumvents beforeEach that clears everything out
  beforeEach((done)=>{
 mariah = new User({name: "Mariah"}) 
  kayla = new User({name: "kayla"}) 
   daniese = new User({name: "daniese"})
   tori = new User ({name:"Tori"})
Promise.all([mariah.save(), 
kayla.save(), 
daniese.save(), 
tori.save()]).then(()=>{
done();
  })
  })
    it('Finds All users With the name tori' , (done) =>{
//Add Query here:
User.find({name: "Tori"})
.then((user) =>{
assert(user[0]._id.toString() === tori._id.toString());
console.log(user[0]._id.toString())
done()
})

        })

//No need for to string because not using a comparioson
it("Find A User with a particular id"), (done)=>{
  User.findOne({_id: tori.id}).then((user)=>{
    
    assert(user.name == "Tori")
    console.log(user.name)
    done()
  })
}

it("Skip and limit the result set"), (done)=>{
User.find({}).sort({name: 1}).skip(1).limit(2).then((data)=>{
  assert(data[0].name === "Kayla")
  assert(data.length === 2)
console.log(data.name[0]);
console.log(data.name[1]);

  done()
})

}




    });
