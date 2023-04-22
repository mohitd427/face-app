const express = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const query = req.query;
    try {
        const users = await UserModel.find(query);
        res.status(200).send(users)
    } catch (err) {
        console.log(err);
        res.status(500).send({error:"Bad Request"})
    }
})

userRouter.post("/adduser", async (req, res) => {
  const data = req.body;
  try {
    const user = new UserModel(data);
    await user.save();
    res.status(200).send(user);
    // console.log(user)
  } catch (err) {
    console.log(err);
    res.status(404).send({err:"Something went wrong",err});
  }
});

userRouter.patch("/edit/:id", async (req, res) => {
  const Id = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: Id }, payload);
    res.send(`The user with id:${Id} has been updated.`);
    // console.log(book)
  } catch (err) {
    console.log(err);
    res.send("err:Oop's Something went wrong");
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: Id });
    res.send({msg:`The user with id:${Id} has been deleted`});
    // console.log(book)
  } catch (err) {
    console.log(err);
    res.send({err:"err:Oop's Something went wrong"});
  }
});

module.exports = {
    userRouter
}