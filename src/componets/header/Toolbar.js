import { useEffect } from "react";
import { useState } from "react";
import Map from "../map/Map";
const Toolbar = () => {
  const [showToolbar, setToolbar] = useState(null);
  const handlerToolbar = () => {
    if (window.scrollY > 300) {
      setToolbar(true);
    } else if (window.scrollY < 300) {
      setToolbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlerToolbar);
    return () => {
      window.removeEventListener("scroll", handlerToolbar);
    };
  }, []);
  return (
    <div
      style={showToolbar ? { display: "flex" } : { display: "none" }}
      className="toolbar"
    >
      <ul className="parent-menu">
        <li className="menu ">
          <div className="parent-box-menu">
            <div className="righit-item-menu">
              <div className="item-t mob">
                <div className="text-item-t">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  <span>موبایل</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات موبایل</span>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>برندهای مختلف گوشی</strong>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t laptop">
                <div className="text-item-t">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                  <span>کالای دیجیتال</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات کالای دیجیتال</span>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لوازم جانبی گوشی</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>کیف و کاور گوشی</span>
                      </li>
                      <li>
                        <span>پاور بانک</span>
                      </li>
                      <li>
                        <span>پایه نگه دارنده</span>
                      </li>
                      <li>
                        <span>
                          <strong>گوشی موبایل</strong>
                        </span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>واقعیت مجازی </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong> ساعت مچبند </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>هدفون وهدست</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>اسپیکر وبلوتوث باسیم</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>هارد و فلش </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>دوربین</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>دوربین عکاسی دیجیتال</span>
                      </li>
                      <li>
                        <span>دوربین ورزشی فیلمبرداری</span>
                      </li>
                      <li>
                        <span>دوربین چاپ سریع</span>
                      </li>

                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لوازم جانبی دوربین</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>تلسکوپ</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>پلی استیشن</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>کامپیوتر</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>تجهیزات مخصوص بازی</span>
                      </li>
                      <li>
                        <span>کیس اسمبل شده</span>
                      </li>
                      <li>
                        <span>قطعات داخل</span>
                      </li>
                      <li>
                        <span>کیس و کی برد</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لپاتپ</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لوازم جانبی لپتاپ</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>کیف کاور</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t car-tools">
                <div className="text-item-t">
                  <i className="fa fa-wrench" aria-hidden="true"></i>
                  <span>خودرووابزار</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات خودرو وتجهیزات صنعتی</span>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>خودرو ایرانی خارجی</strong>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <div className="baner-t">
                        <img src="../images/card/pic8.jpg" alt="" />
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t mod">
                <div className="text-item-t">
                  <i className="fa fa-socks" aria-hidden="true"></i>
                  <span>مد وپوشاک</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات مد وپوشاک</span>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>مردانه </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لباس مردانه</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t super">
                <div className="text-item-t">
                  <i className="fab fa-apple" aria-hidden="true"></i>
                  <span>کالاهای سوپرمارکتی</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات کالاهای سوپرمارکتی</span>
                  <i className="fa fa-chevron-left"></i>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>کالاهای اساسی وخواربار </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لباس مردانه</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t toys">
                <div className="text-item-t">
                  <i className="fa fa-gamepad" aria-hidden="true"></i>
                  <span>اسباب بازی کودک</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات کالاهای اسباب بازی کودک</span>
                  <i className="fa fa-chevron-left"></i>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>کالاهای اساسی وخواربار </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لباس مردانه</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t traditional">
                <div className="text-item-t">
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <span>محصولات سنتی</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات سنتی</span>
                  <i className="fa fa-chevron-left"></i>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>کالاهای اساسی وخواربار </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لباس مردانه</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t beauty">
                <div className="text-item-t">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <span>زیبایی وسلامتی</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی محصولات سنتی</span>
                  <i className="fa fa-chevron-left"></i>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>کالاهای اساسی وخواربار </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لباس مردانه</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item-t sport">
                <div className="text-item-t">
                  <i className="fa fa-campground" aria-hidden="true"></i>
                  <span>ورزش وسفر</span>
                </div>
                <div className="detail-mob-t">
                  <span>همه ی ورزشی وسفر</span>
                  <i className="fa fa-chevron-left"></i>
                  <div className="item-detail-t">
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>کالاهای اساسی وخواربار </strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>لباس مردانه</strong>
                          <i className="fa fa-chevron-left"></i>
                        </span>
                      </li>
                      <li>
                        <span>سامسونگ</span>
                      </li>
                      <li>
                        <span>اپل</span>
                      </li>
                      <li>
                        <span>شیاومی</span>
                      </li>
                      <li>
                        <span>نوکیا</span>
                      </li>
                      <li>
                        <span>هواوی</span>
                      </li>
                      <li>
                        <span>بلک بری</span>
                      </li>
                      <li>
                        <span>الجی</span>
                      </li>
                      <li>
                        <span>کاترپیلار</span>
                      </li>
                      <li>
                        <span>موتورولا</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس قیمت</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 2میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا5میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا 7میلیون تومان</span>
                      </li>
                      <li>
                        <span>تا15میلیون تومان</span>
                      </li>
                      <li>
                        <span>بالای 15 میایون تومان</span>
                      </li>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس حافظه</strong>
                        </span>
                      </li>
                      <li>
                        <span>128</span>
                      </li>
                      <li>
                        <span>256</span>
                      </li>
                      <li>
                        <span>16</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>
                          <span className="dot">|</span>
                          <strong>گوشی بر اساس رزولوشن</strong>
                        </span>
                      </li>
                      <li>
                        <span>تا 13مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 36مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 48مگاپیکسل</span>
                      </li>
                      <li>
                        <span>تا 64مگاپیکسل</span>
                      </li>
                      <li>
                        <span>بالای 130مگاپیکسل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i className="fa fa-list "></i>
          <span className="span-menu">
            <strong>دسته بندی کالاها</strong>
          </span>
        </li>
        <li>
          <i className="fab fa-apple"></i>
          <span className="span-menu">سوپر مارکت</span>
        </li>
        <li>
          <i className="fa fa-fire"></i>
          <span className="span-menu">پرفروش ترین ها</span>
        </li>
        <li>
          <i className="fa fa-hand-holding"></i>
          <span className="span-menu">تخفیف های ویژه</span>
        </li>
        <li>
          <i className="fa fa-plus-circle"></i>
          <span className="span-menu">شگفت انگیز ها</span>
        </li>
        <li>
          <span className="span-menu">سوالی دارید</span>
        </li>
        <li>
          <span className="span-menu">در دیجی کالا بفروشید</span>
        </li>
      </ul>
      <Map />
    </div>
  );
};

export default Toolbar;
