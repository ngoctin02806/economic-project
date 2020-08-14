const renderLogin = (req, res) => {
  const message = req.flash('message');

  return res.render('login/index', {
    message,
    layout: false,
  });
};

const logout = (req, res) => {
  req.logout();

  res.redirect('/');
};

module.exports = {
  renderLogin,
  logout,
};
