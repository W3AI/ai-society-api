// const fs = require('fs');
const execFile = require('child_process').execFile;
const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'First Post',
                content: 'This is the first post!',
                imageUrl: 'images/duck.jpeg',
                creator: {
                    name: 'Steve'
                },
                createdAt: new Date()
            }]
    });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(422)
            .json({
                message: 'Validation failed, entered data is incorrect.',
                errors: errors.array()
            });
    }
    const title = req.body.title;
    const content = req.body.content;
    // create post in db
    const post = new Post({
        title: title,
        content: content,
        imageUrl: 'images/earth-teams.png',
        creator: { name: 'Steve' },
    });

    post.save()
    .then(result => {
        res.status(201).json({
            message: 'Post created successfully!',
            post: result
        });
    })
    .catch(err => {
        console.log(err);
    });

    // Apply content / skill to current project(s)
    const validation = true;    // for now / development  
    // ToDo: Genetic Validator - Regulatory / Governance / Identity
    if (validation) {

        // ToDo: Apply / stage change from post content onto current project(s)

        // ToDo: Test staged change(s)  against current relevant project(s) 

        const testProgress = true;  // for dev - testsPassed > 0

        if (testProgress) {
            const message = `"${post.creator.name} : ${post.title}"`;
            const child = execFile('gc', [message], (error, stdout, stderr) => {
                if (error) {
                    console.error('stderr', stderr);
                    throw error;
                }
                console.log('stdout', stdout);
            });
        }
    }

};