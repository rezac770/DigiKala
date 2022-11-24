import { useState } from "react";

const Digikala = () => {
  const [email, setEmail] = useState("");
  const handlerform = (e) => {
    if (email.trim() !== "") {
      console.log(email);
    }
    e.preventDefault();
  };
  return (
    <div className="digilkala">
      <div className="digikala-wrapper">
        <div className="digiinner">
          <div className="digi-item-ul">
            <div className="digitem">
              <ul className="digiul">
                <li>
                  <strong>بادیجی کالا</strong>
                </li>
                <li>اتاق خبر دیجی‌کالا</li>
                <li>فروش در دیجی‌کالا</li>
                <li>فرصت‌های شغلی</li>
                <li>تماس با دیجی‌کالا</li>
                <li>درباره دیجی‌کالا</li>
              </ul>
            </div>
            <div className="digitem">
              <ul className="digiul">
                <li>
                  <strong>خدمات مشتریان</strong>
                </li>
                <li>پاسخ به پرسش‌های متداول</li>
                <li>رویه‌های بازگرداندن کالا</li>
                <li>شرایط استفاده</li>
                <li>حریم خصوصی</li>
                <li>گزارش باگ</li>
              </ul>
            </div>
            <div className="digitem">
              <ul className="digiul">
                <li>
                  <strong>راهنمای خرید از دیجی‌کالا</strong>
                </li>
                <li>نحوه ثبت سفارش</li>
                <li>رویه ارسال سفارش</li>
                <li>شیوه‌های پرداخت</li>
              </ul>
            </div>
          </div>
          <div className="digi-email">
            <div className="digi-title">
              <h6>همراه ما باشید!</h6>
            </div>
            <div className="digiicon">
              <i className="fab fa-instagram"></i>
              <i class="fab fa-whatsapp"></i>
              <i class="fab fa-twitter-square"></i>
              <i className="fab fa-youtube"></i>
            </div>
            <div className="digiform">
              <h6>با ثبت ایمیل ازجدیدترین تخفیف ها باخبر شوید</h6>
              <form onSubmit={handlerform} className="formdigi" action="">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="ایمیل شما"
                />
                <button
                  disabled={!email}
                  className="btn btn-secondary w-100 btn-form"
                >
                  ثبت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digikala;
