const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogpostschema = new Schema({
    title: String,
    content: String,
    //something like a foreign key
    comments: [
        {type: Schema.Types.ObjectId,
        ref: "comment"}]
});

const blogpost = mongoose.model('blogpost', blogpostschema);

module.exports = blogpost;