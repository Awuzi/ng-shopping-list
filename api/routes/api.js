const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const Shopping = require('../models/ShoppingList');
const User = require('../models/User');

/* GET home page. */
router.get('/', async (req, res) => {
  const items = await Shopping.find()
  res.send(items);
});

router.post('/', async (req, res) => {
  await new Shopping(req.body).save()
  console.log("Added !");
  res.status(200);
});

router.post('/update', async (req, res) => {
  await Shopping.updateOne(req.body, {$set: {isDone: !req.body.isDone}});
  res.status(204);
});

router.post('/delete', async (req, res) => {
  await Shopping.findOneAndDelete(req.body);
  res.status(200);
});

router.post("/register", async (req, res) => {
  if (!await User.findOne({username: req.body.username})) {
    await new User({
        username: req.body.username,
        password: crypto
          .createHash("sha256")
          .update(req.body.password)
          .digest("base64"),
        role: "member",
      }).save();
    res.status(200);
  }
});

module.exports = router;
