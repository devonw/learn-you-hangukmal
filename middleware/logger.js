const logger = (req, res, next) => {
  console.log(`Serving: ${req.method} to ${req.url}`);
  next();
} 

module.exports = logger;