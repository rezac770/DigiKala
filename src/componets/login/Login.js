const Login = ({ modalhandler }) => {
  return (
    <>
      <div onClick={() => modalhandler()} className="regester">
        <span className="span-enter">ورود</span>
        <span className="span-dot">|</span>
        <span className="span-regester">ثبت نام</span>
        <i className="fas fa-sign-out-alt login"></i>
      </div>
    </>
  );
};

export default Login;
