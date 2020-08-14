const home = (req, res) => {
  return res.render('home/index');
};

const renderLogin = (req, res) => {
  const message = req.flash('message');

  console.log(message);

  return res.render('login/index', {
    message,
    layout: false,
  });
};

module.exports = {
  home,
  renderLogin,
};
