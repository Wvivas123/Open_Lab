const mongoose = require('mongoode');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.types.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        require: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    likes: [{
        user: {
            type: Schema.types.ObjectId,
            ref: 'users'
        }
    }],
    comments: [{
        user: {
            type: Schema.types.ObjectId,
            ref: 'users'
        },
        text: {
            type: String,
            required: True
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            defult: Date.now
        }

    }],
    date: {
        type: Date,
        defult: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema);