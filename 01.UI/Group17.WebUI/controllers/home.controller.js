const home = (req, res) => {
  return res.render('home/index');
};

const renderLogin = (req, res) => {
  return res.render('login/index', {
    layout: false,
  });
};

module.exports = {
  home,
  renderLogin,
};
