import { useState } from "react";

const Headres = () => {
  const [name, setName] = useState("active");
  const handlerclass = () => {
    if (name) {
      setName(!name);
    } else {
      setName("active");
    }
  };
  return (
    <section id="header-res">
      <div className="header-res container">
        <div className="nav-bar">
          <div className="nav-list">
            <div onClick={handlerclass} className={`hamburger ${name}`}>
              <div className="bar"></div>
            </div>
            <ul onClick={handlerclass} className={name && name}>
              <li>
                <div className="brand-img">
                  <img src="../images/logo/logo.svg" alt="" />
                </div>
              </li>
              <li>
                <i className="fa fa-fire"></i>
                <a>پرفروش ترین ها</a>
              </li>
              <li>
                <i className="fa fa-hand-holding"></i>
                <a>تخفیف های ویژه</a>
              </li>
              <li>
                <i className="fa fa-plus-circle"></i>
                <a>شگفت انگیز ها</a>
              </li>
              <li>
                <i className="fab fa-apple"></i>
                <a href="#">سوپر مارکت</a>
              </li>
            </ul>
          </div>
          <div className="brand">
            <div className="brand-img">
              <img src="../images/logo/logo.svg" alt="" />
            </div>
          </div>
          <div className="icon-q">
            <i className="fa fa-question"></i>
          </div>
        </div>
        <div className="form-headres">
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="جستجو" />
          </div>
          <div className="sign-in">
            <span>ورود</span>
            <span>|</span>
            <span>ثبت نام</span>
            <i className="fa fa-sign-in-alt"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headres;
