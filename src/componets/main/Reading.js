import React from "react";

const Reading = () => {
  return (
    <div className="parent-reading">
      <div className="top-reading">
        <div className="text-reading">
          <h6>خواندنی ها</h6>
        </div>
        <div className="left-reading">
          <a href="#">
            <span>مطالب بیشتر در دیجی کالا مگ</span>
          </a>
        </div>
      </div>
      <div className="wrapper-detail-reading">
        <div className="box-reading">
          <div className="img-reading">
            <img src="../images/reading/pic1.jpg" alt="" />
          </div>
          <div className="detail-reading">
            <p>گرافیک تراشه ای دایمنسیتی 9200 احتمالا بهتر</p>
          </div>
        </div>

        <div className="box-reading">
          <div className="img-reading">
            <img src="../images/reading/pic2.jpg" alt="" />
          </div>
          <div className="detail-reading">
            <p>کانسپت رنو4تروفی معرفی شد</p>
          </div>
        </div>
        <div className="box-reading">
          <div className="img-reading">
            <img src="../images/reading/pic3.jpg" alt="" />
          </div>
          <div className="detail-reading">
            <p>پیکسل 7 عملکرد بهتر نسبت به مدل های قبلی داشت</p>
          </div>
        </div>
        <div className="box-reading">
          <div className="img-reading">
            <img src="../images/reading/pic4.jpg" alt="" />
          </div>
          <div className="detail-reading">
            <p>نقد وبررسی کلاسیک گوشی گلکسی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
