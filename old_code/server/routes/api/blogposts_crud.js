const db = require('../../models');
const express = require('express');
const router = express.Router();

//CREATE
router.post("/blog", (req, res) => {
    const newPost = {
        title: req.body.title,
        body: req.body.body
    }
    db.Blogposts
        .create(newPost)
        .then((response) => {
            console.log(response);
            res.status(200).json({
                msg: "Successfully wrote to database!",
                response: response
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error while writing to database!",
                error: err
            })
        })
})
//READ
router.get("/blog", (req, res) => {
    db.Blogposts
        .findAll({ limit: 100, order: [['updatedAt', 'DESC']]})
        .then((response) => {
            console.log(response);
            res.status(200).json({
                msg: "Successfully read database!",
                data: response
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error while trying to read database!",
                error: err
            })
        })
})
//UPDATE
router.put("/blog/:id", (req, res) => {
    //this route only toggles the read field, messages should not be altered once written
    db.Blogposts
        .update(
            {
                title: req.body.title,
                body: req.body.body
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then((response) => {
            console.log(response);
            res.status(200).json({
                msg: "Successfully wrote to database!",
                response: response
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                msg: "Error while saving to database!",
                error: err
            })
        })
})
//DELETE
router.delete("/blog/:id", (req, res) => {
    db.Blogposts
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            console.log(response)
            res.status(200).json({
                message: "Successfully deleted post from database!",
                response: response
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "Error while attempting to delete from database!",
                error: err
            })
        })
})

module.exports = router;