const passport = require('passport');
const {
  createNewUser,
  checkUserIsExist,
} = require('../../../02.Business/userBus');

const renderLogin = (req, res) => {
  const message = req.flash('message');

  return res.render('login/index', {
    message,
    layout: false,
  });
};

const logout = (req, res) => {
  req.logout();

  res.redirect(req.session.currentPath || '/');
};

const renderRegister = (req, res) => {
  const message = req.flash('message');

  return res.render('register/index', {
    msgError: req.flash('msgError')[0] || null,
    oldData: req.flash('oldData')[0] || null,
    message,
    layout: false,
  });
};

const register = async (req, res, next) => {
  const email = req.body.username;
  const { password } = req.body;
  const { passwordRepeat } = req.body;
  const { name } = req.body;
  const { phone } = req.body;
  const { address } = req.body;

  const msgError = {};
  const data = {
    email,
    matkhau: password,
    tenkhachhang: name,
    sdt: phone,
    diachi: address,
    avatar: '/images/user-avatar.png',
  };
  let flag = true;

  if (email === '') {
    msgError.email = 'Bạn chưa nhập email';
    flag = false;
  }
  if (password === '') {
    msgError.password = 'Bạn chưa nhập mật khẩu';
    flag = false;
  }
  if (passwordRepeat === '') {
    msgError.passwordRepeat = 'Bạn chưa nhập lại mật khẩu';
    flag = false;
  }
  if (name === '') {
    msgError.name = 'Bạn chưa nhập tên';
    flag = false;
  }
  if (phone === '') {
    msgError.phone = 'Bạn chưa số điện thoại';
    flag = false;
  }
  if (address === '') {
    msgError.address = 'Bạn chưa nhập địa chỉ';
    flag = false;
  }
  if (password !== passwordRepeat) {
    req.flash('message', 'Mật khẩu không trùng khớp');
    flag = false;
  }
  const user = await checkUserIsExist(data.email);
  if (user && user.email === data.email) {
    req.flash('message', 'Tài khoản email đã tồn tại');
    flag = false;
  }

  if (flag === false) {
    req.flash('msgError', msgError);
    req.flash('oldData', data);
    res.redirect('dang-ky');
  } else {
    const newUser = await createNewUser(data);
    console.log(newUser);

    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/dang-ky',
      failureFlash: true,
      passReqToCallback: true,
    })(req, res, next);
  }
};

module.exports = {
  renderLogin,
  logout,
  renderRegister,
  register,
};
