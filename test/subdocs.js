const assert = require("assert");
const mongoose = require("mongoose");
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");


describe('Testing my PostSchema Subdocuments', ()=>{
it("Can create a subdocument", (done)=>{
const tori = new User({
    name: "Tori",
    post: [{title: "Postitle"}]   
})

tori.save()
.then(()=> User.findOne({name: "Tori"}))
.then((user)=>{
    assert(user.post[0].title === "Postitle")
    console.log(user.name+ user.post[0].title);
    done()
})
});

it("Add documents to existing Post", (done)=>{
    const tori = new User({
        name: "Tori",
        //empty array not needed
    post: []})
tori.save()
//()=> User.findone is equivalent to return return User.findone
.then(()=> User.findOne({name: "Tori"}))
.then((user)=>{
    user.post.push({
        title: "Test Post"
    })
   return  user.save()    
})
.then(()=> User.findOne({name: "Tori"}))
.then((user)=>{
    assert(user.post.length > 0)
    console.log(user.post)
    done()
})

})


it("Remove an existing document", (done)=>{
const tori = new User(
    {
        name: "Tori",
        post:[{title: "New Post"}]
        
    });

    tori.save()
    .then(()=> User.findOne({name: "Tori"}))
    .then((user)=>{
        //call user.save after remove
        const post = user.post[0]
        post.remove()
        return user.save()
    })
    .then(()=> User.findOne({name:"Tori"}))
    .then((user)=>{
        assert(user.post.length === 0);
        console.log(user.post)
        done()
    })
})

});