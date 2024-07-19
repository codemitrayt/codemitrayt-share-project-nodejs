const asyncWrapper = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      return next(err);
    });
  };
};

module.exports = asyncWrapper;