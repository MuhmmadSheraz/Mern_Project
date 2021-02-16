// Middleware also has a property to share some data to all routes
// Middleware has a lot more properties including url request types and other things
const testMiddleware = (req, res, next) => {
  //   console.log("Custom Middleware is Running");
  req.middlewareData = "Hello From Middle Ware";

  next();
};
module.exports = testMiddleware;
