const express = require("express");
const router = express.Router();
const Post = require("../../models/Post.js");
require("express-router-group");

router.group("/posts", (router) => {
    /***
     * GET all the posts
     * @author Htoo Maung Thait
     *
     */
    router.get("/", async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {}
    });

    /***
     * Save a post
     * */
    router.post("/", async (req, res) => {
        console.log(req.body);
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
        });

        try {
            const newPost = await post.save();
            res.status(201).json({ newPost });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    /***
     * Get specific post
     */
    router.get("/:postId", async (req, res) => {
        // console.log(req.params.postId)
        try {
            const post = await Post.findById(req.params.postId);
            res.status(200).json(post);    
        } catch (error) {
            res.status(500).json({message : error.message});    
        }
        
    });


    router.delete("/:postId", async(req, res) => {
        try {
            const removedPost = await Post.remove({ _id : req.params.postId })
            res.status(200).json(removedPost);
        } catch (error) {
            res.status(500).json({message : error.message});  
        }
    })

    router.patch("/:postId", async(req, res) => {
        try {
            const updatedPost = await Post.updateOne({ _id : req.params.postId }, {
                $set : { title : req.body.title, description : req.body.description}
            })
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(500).json({message : error.message});  
        }
    })
});

module.exports = router;
