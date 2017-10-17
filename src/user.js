const mongoose = require("mongoose");
//Allows us to create a schema for our user model
const Schema = mongoose.Schema;
const postSchema = require("./post");

//Create rows an proeperties similar to sql ccreate table
const userSchema = new Schema({
name: {
 type: String,
 validate: {

 validator: (name)=> name.length > 2,
 message: "Name must be longer than 2 characters"
 },
 //Validation name.required[1] is an error message
 required: [true, 'Name is required']   
},
//postcount: Number, Substituting this for a virual property
email: "string",
//schema type is looking for postSchema
post: [postSchema],
likes: Number,
blogpost: [{
  type: Schema.Types.ObjectId,
  //like a foriegn key
  //allows me to access the blogpost inside of the blogpost file
  ref: 'blogpost'  
}]
});
//How to create a virtual property
//.get cannot use fat arrow function
userSchema.virtual('postcount').get(function() {
return this.post.length
})
//Represents the entire collection of user data
userSchema.pre("remove", function(next){
const Blogpost = mongoose.model("blogpost")
Blogpost.remove({ _id: {$in: this.blogposts}})
.then(()=>next())
});


const User = mongoose.model('user', userSchema)

module.exports = User