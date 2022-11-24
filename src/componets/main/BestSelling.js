import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { getsell, loading, sells } from "../toolkit/digiSlice";

const Bestselling = () => {
  const dispatch = useDispatch();
  const selling = useSelector(sells);
  const isloading = useSelector(loading);
  useEffect(() => {
    dispatch(getsell());
    // eslint-disable-next-line
  }, []);
  if (isloading) {
    return <Loader />;
  } else {
    return (
      <div className="wrapper-selling">
        <div className="top-selling">
          <div className="text-selling">
            <i className="fa fa-fire"></i>
            <h5>پرفروشترین کالاها</h5>
          </div>
          <div className="all-see">
            <a href="#" className="view-all-link">
              <span>مشاهده همه</span>
              <div className="icon-see-view">
                <i className="fa fa-chevron-left"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="parnet-selling">
          <div className="inner-selling">
            {selling.map((sell) => (
              <div key={sell.id} className="item-selling">
                <div className="img-selling">
                  <img src={sell.url} alt="" />
                </div>
                <div className="number-selling">
                  <span>{sell.number}</span>
                </div>
                <div className="detail-selling">
                  <span>{sell.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Bestselling;
