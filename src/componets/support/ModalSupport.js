import React from "react";

const Modalsupport = () => {
  return (
    <div className="modal-support" onClick={(e) => e.stopPropagation()}>
      <div className="inner-support">
        <h5 className="text-support">پشتیبانی انلاین</h5>
        <span>برای راهنمایی بهتر لطفا اطلاعات زیر را وارد نمایید:</span>
        <form className="form-support" action="">
          <label htmlFor="name">نام</label>
          <input id="name" type="text" placeholder="نام نام خوانوادگی" />
          <label htmlFor="number">شماره موبایل</label>
          <input id="number" type="text" placeholder="شماره تماس" />
          <label htmlFor="email">ایمیل</label>
          <input id="email" type="email" placeholder="ایمیل" />
          <label htmlFor="subject">موضوع</label>
          <select className="select-supoort" name="subject" id="subject">
            <option value="">پیگیری سفارش</option>
            <option value="">سوال درباره ی سفارش گزاری</option>
            <option value="">خدمات پس از فروش</option>
          </select>
          <button type="button" className="btn btn-danger">
            شروع گفتگو
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modalsupport;
