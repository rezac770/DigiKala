import React from "react";
import AmazingComponet from "./componetParent/AmazingComponet";

const Amazing = () => {
  return (
    <div className="parent-amazing">
      <div className="left-amazing">
        <div className="img-amazing-box">
          <img src="../images/superamazing/box.png" alt="" />
        </div>
        <h2 className="amazing-h2">شگفتت انگیز سوپر مارکتی</h2>
        <span className="amazing-span">تا ۳۶٪ تخفیف</span>
      </div>
      <div className="right-amazing">
        <AmazingComponet
          url={`../images/superamazing/pic1.jpg`}
          persent={"25%"}
        />
        <AmazingComponet
          url={`../images/superamazing/pic2.jpg`}
          persent={"33%"}
        />
        <AmazingComponet
          url={`../images/superamazing/pic3.jpg`}
          persent={"15%"}
        />
        <AmazingComponet
          url={`../images/superamazing/pic4.jpg`}
          persent={"19%"}
        />

        <AmazingComponet
          url={`../images/superamazing/pic5.jpg`}
          persent={"23%"}
        />

        <AmazingComponet
          url={`../images/superamazing/pic6.jpg`}
          persent={"23%"}
        />

        <div className="span-amazin-left">
          <span>بیش از 90کالا</span>
          <i className="fas fa-hand-point-left"></i>
        </div>
      </div>
    </div>
  );
};

export default Amazing;
