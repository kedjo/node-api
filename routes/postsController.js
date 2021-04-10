const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if(!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});

router.post("/", (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if(!err)    res.send(docs);
        else console.log("Error saving new post: " + err);
    });
});

router.put("/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params._id)
    };

    const updatedRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set : updatedRecord},
        { new: true },
        (err, docs) => {
            if(!err)    return res.status(200).send(docs);
            else console.log("update error : " + err);
        }
    );
});

router.delete("/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params._id)
    };

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("delete fail : " + err);
        }
    );
})


module.exports = router;