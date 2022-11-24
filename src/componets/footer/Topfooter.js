import React from "react";

const Topfooter = () => {
  return (
    <div className="top-footer">
      <div className="right-side-top-footer">
        <div className="logo-top-footer">
          <img src="../images/logo/digi.svg" alt="" />
        </div>
        <div className="tell-digi">
          <span className="phone">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span className="between">|</span>
          <span> ۷روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
      </div>
      <div className="left-side-top-footer">
        <div className="box-elevator">
          <a href="#">
            <div className="elevator">
              <span>بازگشت به بالا</span>
              <i className="fa fa-chevron-up"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topfooter;
