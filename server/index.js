const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://yaskaboy:fCU8lyMPFn35nAb5@cluster0.qrctmiv.mongodb.net/mern?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then((users) => {
        res.json(users)
    }).catch((error) => {
        res.json(error)
    })
})

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => console.log("Server is running...."));
