import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getslection, selections } from "../toolkit/selectionSlice";
const Sectionpage = () => {
  const dispatch = useDispatch();
  const itemselection = useSelector(selections);
  useEffect(() => {
    dispatch(getslection());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="wrapper-selection">
      <div className="selection-top">
        <div className="selecton-text">
          <i className="fa fa-percent"></i>
          <h5 className="text-selecton">
            منتخب محصولات تخفیف و حراج دیجی کالا
          </h5>
        </div>
      </div>
      <div className="parnet-slection-product">
        <div className="inner-selection">
          {itemselection.map((item) => (
            <div key={item.id} className="item-selection">
              <div className="box-slection">
                <div className="img-slection">
                  <Link to={`/digi/item/selection/${item.id}`}>
                    {" "}
                    <img src={`../${item.url}`} alt={item.url} />
                  </Link>
                </div>
                <div className="title-slection">
                  <div className="price-slection">
                    <span className="span-section-percent">{item.percent}</span>
                    <div className="span-selection-price">
                      <span className="">{item.price}</span>
                      <span>تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sectionpage;
