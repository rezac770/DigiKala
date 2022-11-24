const Digiplus = () => {
  return (
    <div className="digi-plus">
      <div className="logo-digi-plus">
        <h4>DIGIPLUS</h4>
      </div>
      <div className="box-item-digiplus">
        <div className="inner-item-digiplus">
          <span className="span-plus">
            <div className="title-span-text">
              <i className="fa fa-camera"></i>
              <span>چرخ و بخت</span>
            </div>
            <div className="image-left-digiplus">
              <img src="../images/digiclubs/wheel-spinner.jpg" alt="" />
            </div>
          </span>
        </div>
        <div className="inner-item-digiplus">
          <span className="span-plus">
            <div className="title-span-text">
              <i className="fa fa-bullseye"></i>
              <span>ماموریت</span>
            </div>
            <div className="image-left-digiplus">
              <img src="../images/digiclubs/missions.png" alt="" />
            </div>
          </span>
        </div>
        <div className="inner-item-digiplus">
          <span className="span-plus">
            <div className="title-span-text">
              <i className="fa fa-gifts"></i>
              <span>جایزه</span>
            </div>
            <div className="image-left-digiplus">
              <img src="../images/digiclubs/awards.png" alt="" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Digiplus;
