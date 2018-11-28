const { assert, expect, request, User, Order } = require('../common');

const createUser = () => User.create({
  "username": `username${new Date().getTime()}`,
  "password": "password",
  "lastName": "Cho",
  "firstName": "Justin",
})

const createOrder = () => createUser().then((user) => {
  console.log(user.id);
  var order = Order.build({
    "shippingStatus": "verified",
    "totalPrice": 399.99,
    "storePickup": true,
  })
  order.setUser(user);
  return order.save();
});

describe('Order', function () {
  describe('Get all orders', function () {
    it('Return 200', function (done) {
      createOrder()
        .then(() => {
          request
            .get('/orders')
            .expect(200)
            .expect(function (res) {
              console.log(res.body);
            })
            .end(done);
        });
    });
  });

  /*
  describe('Create an order', function () {
    it('Return 200', function (done) {
      request
        .put('/orders')
        .send(validOrder)
        .expect(200)
        .end(done);
    });
  });

  describe('Delete an order', function () {
    it('Return 200', function (done) {
      createOrder.then(() => {
        request
          .delete('/orders/' + order.id)
          .expect(200)
          .expect(function (res) {
            assert.equal(Object.keys(res.body).length, 1);
            assert.equal(res.body.delete, true);
          })
          .end(done);
      });
    });
  });
  */
});
