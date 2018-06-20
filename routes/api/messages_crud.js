const db = require('../../models');
const express = require('express');
const router = express.Router();

//CREATE
router.post("/messages", (req, res) => {
    const newMsg = {
        name: req.body.name,
        email: req.body.email || null,
        phoneNum: req.body.phoneNum || null,
        message: req.body.message
    }
    db.Messages
        .create(newMsg)
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
router.get("/messages", (req, res) => {
    db.Messages
        .findAll()
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
router.put("/messages/:id", (req, res) => {
    //this route only toggles the read field, messages should not be altered once written
    db.Messages
        .update(
            {
                read: req.body.isRead
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
router.delete("/messages/:id", (req, res) => {
    db.Messages
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            console.log(response)
            res.status(200).json({
                message: "Successfully deleted message from database!",
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