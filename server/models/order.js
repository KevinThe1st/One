'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
	Order.hasMany(OrderItem);
  };
  return Order;
};