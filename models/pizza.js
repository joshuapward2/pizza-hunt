const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref:'Comment'
      }
    ]
  });

  // get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
},
{
  toJSON: {
    virtuals: true,
    getters: true

  },
  id: false
}
);









// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;