const express = require('express');
const router = express.Router();
const firebase = require('firebase');

firebase.initializeApp({
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    databaseURL: process.env.FB_DBURL,
    projectId: process.env.FB_PID,
    storageBucket: "",
    messagingSenderId: process.env.FB_MSGSENDERID
})

const db = firebase.database();

//messages
//create
router.post("/messages", (req, res) => {
    const newMsg = {
        name: req.body.name,
        email: req.body.email || null,
        phoneNum: req.body.phoneNum || null,
        message: req.body.message,
        read: false,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }
    db
        .ref("messages")
        .push()
        .set(newMsg)
        .then((snapShot) => {
            console.log("FB Msg write successful");
            res.json({
                msg: "Saving message to firebase successful!"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error! Saving message to firebase failed.",
                error: err
            })
        })
});
//read
router.get("/messages", (req, res) => {
    db
        .ref("messages")
        .once("value") //only reads db once
        .then((snapshot) => {
            res.json({
                msg: "Read attempt on firebase successful.",
                data: snapshot.val()
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error! Read attempt on firebase failed.",
                error: err
            })
        })
});
//update
router.put("/messages", (req, res) => {
    db
        .ref("messages/" + req.body.msgId + "/read")
        .set(req.body.read)
        .then((snapShot) => {
            console.log("FB Msg write successful");
            res.json({
                msg: "Saving message to firebase successful!"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error! Failed to update message.",
                error: err
            })
        })
});
//delete
router.delete("/messages/:msgId", (req, res) => {
    db
        .ref("messages/" + req.params.msgId)
        .remove()
        .then((snapShot) => {
            console.log("FB Msg deletion successful");
            res.json({
                msg: "FB Msg deletion successful"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error while trying to delete message from firebase.",
                error: err
            })
        })
});


//blog
//create
router.post("/blog", (req, res) => {
    const newPost = {
        title: req.body.title,
        body: req.body.body,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }
    db
        .ref("blog")
        .push()
        .set(newPost)
        .then((snapShot) => {
            console.log("FB blog write successful");
            res.json({
                msg: "Saving blog post to firebase successful!"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error! Saving blog post to firebase failed.",
                error: err
            })
        })
})
//read
router.get("/blog", (req, res) => {
    db
        .ref("blog")
        .once("value") //only reads db once
        .then((snapshot) => {
            res.json({
                msg: "Read attempt on firebase successful.",
                data: snapshot.val()
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error! Read attempt on firebase failed.",
                error: err
            })
        })
})
//update
router.put("/blog", (req, res) => {
    var updatedPost = {
        title: req.body.title,
        body: req.body.body,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }
    db
        .ref("blog/" + req.body.blogId)
        .set(updatedPost)
        .then((snapShot) => {
            console.log("FB blog update successful");
            res.json({
                msg: "FB blog update successful!"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error! Failed to update blog.",
                error: err
            })
        })
})
//delete
router.delete("/blog/:blogId", (req, res) => {
    db
        .ref("messages/" + req.params.blogId)
        .remove()
        .then((snapShot) => {
            console.log("FB blog deletion successful");
            res.json({
                msg: "FB blog deletion successful"
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error while trying to delete blog from firebase.",
                error: err
            })
        })
})
module.exports = router;