module.exports = {
  MONGODB_URL: process.env.NODE_ENV === 'production' ? 'mongodb://localhost:27017/tools' : 'mongodb://localhost:27017/tools',
  PORT: process.env.PORT || 3000,
};
