const { getAllCategoriesBus } = require('../../../02.Business/categoryBus');

const categoryMiddleware = async (req, res, next) => {
  const categories = await getAllCategoriesBus();

  res.locals.categories = categories;

  return next();
};

module.exports = {
  categoryMiddleware,
};
