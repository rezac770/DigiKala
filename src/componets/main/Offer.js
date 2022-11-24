import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getoffer, offers } from "../toolkit/digiSlice";

const Offer = () => {
  const offer = useSelector(offers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getoffer());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="offer">
      <h5 className="text-center">پیشنهاد ویژه دیجی کالا</h5>
      <div className="wrapper-offer">
        <div className="inner-offer">
          {offer.map((item) => (
            <div key={item.id} className="box-img-offer">
              <img src={item.img} alt="" />
              <p className="span-offer">
                <strong>{item.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
