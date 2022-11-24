import Login from "../login/Login";
import { Link } from "react-router-dom";
import { counter } from "../toolkit/selectionSlice";
import { useSelector } from "react-redux";

import Toolbar from "./Toolbar";

const Header = ({ modalhandler }) => {
  const count = useSelector(counter);
  return (
    <>
      <header className="header">
        <div className="top">
          {/* <h1 className="logo-name">دیجی کالا</h1> */}
          {/* <img src="../images/logo/digi.svg" alt="" /> */}
        </div>
        <nav className="parent-side">
          <nav className="side-right">
            <div className="logo">
              <Link to={"/"}>
                <img src="../images/logo/logo.svg" alt="" />
              </Link>
            </div>
            <div className="search">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="جستجو" />
            </div>
          </nav>
          <nav className="left-side">
            <div className="left-said-tool">
              <Login modalhandler={modalhandler} />

              <Link to={"/digi/cart"}>
                {" "}
                <i className="fa fa-shopping-cart shop "></i>
                {count > 0 && <span className="span-shop">{count}</span>}
              </Link>
            </div>
          </nav>
        </nav>

        <Toolbar />
      </header>
    </>
  );
};

export default Header;
