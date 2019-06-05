const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        tags: {
            type: String,
            required: false
        },
        repoUrl: {
            type: String,
            required: false
        },
        imageUrl: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        creator: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postSchema);