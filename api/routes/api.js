const express = require('express');
const router = express.Router();

const Shopping = require('../models/ShoppingList');

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

module.exports = router;
