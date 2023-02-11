const mongoose = require('mongoose');


// TO CHECK FOR SCHEMA TYPES GO TO OFFICIAL DOCS OF MONGOOSE
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        // maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type:Boolean,
        default:false
    }
})

// schema defines structure for the document like type, validations, etc.
// mongoose model provides an interface to the database,
//  using the model we will be able to create, update, query and delete our documents 


module.exports = mongoose.model('Task', TaskSchema);
// the first argument is the singular name of the collection your model is for. mongoose automatically looks for the plural lowercased version of your model name