//Mocha uses describe and it to test code
const assert = require("assert");
const mongoose = require("mongoose");
//cODE SAYS WHENEVER YOU ARE using a promise just use the es6 implementation
mongoose.Promise = global.Promise
//User variable represents users in src folder and represents the entire collection of data in our database
const User = require("../src/user");
const Blogpost = require("../src/blogpost")
const Comment = require("../src/comment");


describe("zAssociations", ()=>{
let tori;
let blog; 
let comment;
beforeEach((done)=>{
tori = new User({name: "Tori"});
blog = new Blogpost({title: "Ice Cream is lit", content: "You damn right it is"});
comment = new Comment({content: "Congrats on a great post"})
    

    //Associates a user with a new collection
    tori.blogpost.push(blog)
   blog.comments.push(comment)
    comment.user = tori

    tori.save()
    blog.save()
    comment.save()

    Promise.all([ tori.save(),
    blog.save(),
    comment.save()])
    .then(()=>done())
});
//Mocha test file that only runs this statememnt
xit("Saves a relationship between user and blogpost", (done)=>{
User.findOne({name: "Tori"})
.populate('blogpost')
.then((user)=>{
   console.log(user.blogpost)
   console.log(comment.user)
    done()
})
    });

    it("Saves a whole user tree", (done)=>{
        User.findOne({name: "Tori"})
        .populate({

path: 'blogpost',
populate: {
    path: 'comments',
    model: 'comment',
         populate: {
            path: 'user',
            model: 'user'
    }
}
        })
        .then((user)=> {
console.log(user.blogpost[0])
done()
    });
    });
 
});