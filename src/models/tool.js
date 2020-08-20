const mongoose = require('mongoose');
const validator = require('validator');

const toolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
    validate(value) {
      const isValidURL = validator.isURL(value, {
        require_protocol: true,
        protocols: ['http', 'https'],
      });
      if (!isValidURL) {
        throw new Error('Link URL is invalid');
      }
    },
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Tool', toolSchema);
