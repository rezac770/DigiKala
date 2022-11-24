const Doc = () => {
  return (
    <div className="doc">
      <div className="doc-wrapper">
        <div className="doc-parent">
          <div className="doc-right">
            <div className="title-doc">
              <h6 className="t-h6">
                <strong>
                  فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
                </strong>
              </h6>
              <p className="doc-p">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                <br /> متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه
                به
                <br /> دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
                ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها
                کار کرده و توانسته <br /> از این طریق مشتریان ثابت خود را داشته
                باشد.
              </p>
              <a className="view-all-link">
                <span>مشاهده بیشتر</span>
                <div className="icon-see-view">
                  <i className="fa fa-chevron-left"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="doc-left">
            <div className="doc-parent-left">
              <div className="doc-item">
                <img src="../images/sabt/pic1.png" alt="" />
              </div>
              <div className="doc-item">
                <img src="../images/sabt/pic2.png" alt="" />
              </div>
              <div className="doc-item">
                <img src="../images/sabt/pic3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="p-d">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </p>
    </div>
  );
};

export default Doc;
