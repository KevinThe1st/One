var express = require('express');
var router = express.Router();
const { User } = require('../models');
const { Order } = require('../models');
const { Item } = require('../models');
const { OrderItem } = require('../models');

function updateOrderTotal(order, orderItem, res){
  order.totalPrice += orderItem.price;
  order.save().then((order) => {
    return res.json({ updated: 'Success' });
  });
}

function updateCartOrder(order, itemId, quantity, res) {
  Item.findOne({ where: {
    id: itemId
  }}).then((item) => {
    OrderItem.findOne({ where: {
      orderId: order.id,
      itemId
    } }).then((orderItem) => {
      if (orderItem) {
        order.totalPrice -= orderItem.price;
        orderItem.quantity = quantity;
        orderItem.price = item.price * quantity;
        orderItem.save().then((orderItem) => {
          updateOrderTotal(order, orderItem, res)
        });
      }
      else {
        orderItemT = OrderItem.build({
          quantity,
          price: item.price * quantity
        });
        orderItemT.setOrder(order)
        orderItemT.setItem(item)
        orderItemT.save().then((orderItemNew) => {
          updateOrderTotal(order, orderItemNew, res);
        });
      }
    });
  });
}

router.get('/:orderId', function (req, res) {
  OrderItem.findAll({ where: { orderId: req.params.orderId } }).then((items) => {
    return res.json({items});
  });
});

router.put('/cart', function (req, res) {
  const {
    userId,
    itemId,
    quantity,
  } = req.body;
  Order.findOne({
    where: {
      userId,
      shippingStatus: 'Cart'
    }
  }).then((order) => {
    if (order){
      updateCartOrder(order, itemId, quantity, res)
    }
    else{
      User.findById(userId).then((user) => {
        var order = Order.build({
          shippingStatus: "Cart",
          totalPrice: 0.0,
          storePickup: false
        })
        order.setUser(user);
        order.save().then((orderNew) => {
          updateCartOrder(orderNew, itemId, quantity, res)
        })
      });
    }
  }).catch(() => {
    res.status(403).json({ updated: 'Failure' });
  });
});

module.exports = router;
