const mongoose = require('mongoose')
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Product'
        },
      },
    ],
    shippingAddress: [{
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      location: {
        lat: Number,
        lng: Number,
        address: String,
        name: String,
        vicinity: String,
        googleAddressId: String,
      },
    }],
    paymentMethod: { type: String, required: true },
    paymentResult: [{
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    }],
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectID, ref: 'user' },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;