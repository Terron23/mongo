const assert = require("assert");
const mongoose = require("mongoose");
//User variable represents users in src folder and represents the entire collection of data in our database
mongoose.Promise = global.Promise
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");
const Blogpost = require('../src/blogpost');

describe("Middleware", ()=>{
    let tori, blog;
    beforeEach((done)=>{
tori = new User({name: "Tori"});
blog = new Blogpost({title: "Ice Cream is lit", content: "You damn right it is"});
    

    //Associates a user with a new collection
    tori.blogpost.push(blog)


    tori.save()
    blog.save()
    

    Promise.all([ tori.save(), blog.save()])
    .then(()=>done())
});


it("Clean up blogpost", (done)=>{
    tori.remove()
    .then(()=> Blogpost.count())
    .then((count)=>{
        console.log(count)
//assert(count === 0)
done()
    })

})
})