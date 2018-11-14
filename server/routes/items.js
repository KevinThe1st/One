var express = require('express');
var router = express.Router();
const { Item } = require('../models');
const { ItemCategory } = require('../models');

router.get('/', function(req, res) {
  Item.findAll().then((items) => {
    return res.json({items});
  });
});

// axios set params for array
router.get('/byCat/:categoryId', function(req, res) {
  ItemCategory.findAll({ where: { categoryId: req.params.categoryId }}).then((items) => {
    var ids = []
    for(var i = 0; i < items.length; i++){
      ids.push(items[i].getDataValue('ItemId'))
    }
    Item.findAll({ where: { id: ids }}).then((items) => {
      return res.json({items});
    });
  });
});

router.get('/:id', function(req, res) {
  Item.findById(req.params.id).then((item) => {
    return res.json({item});
  });
});

router.put('/', function(req, res) {
  const {
    name,
    price,
    stock,
    descShort,
    descLong,
    categoryId,
  } = req.body;
  Item.create({
    name,
    price,
    stock,
    descShort,
    descLong,
  }).then((item) => {
    ItemCategory.create({
      itemId: item.id,
      categoryId
    }).then((ic) => {
<<<<<<< HEAD
        return res.json({ created: 'Success' });
      });
=======
      return res.json({ created: 'Success' });
    });
>>>>>>> origin/KyleChin
  }).catch(() => {
    return res.status(403).json({ created: 'Failure' });
  });
});

router.delete('/:id', function(req, res) {
  const idToDelete = req.params.id;
  Item.findById(idToDelete).then((item) => {
    item.destroy().then(() => {
      return res.json({ delete: true });
    });
  }).catch(() => {
    return res.json({ delete: false });
  });
});

module.exports = router;
