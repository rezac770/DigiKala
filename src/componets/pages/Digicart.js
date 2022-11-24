import { useEffect } from "react";
import { useState } from "react";
import { deletcount } from "../toolkit/selectionSlice";
import { useDispatch } from "react-redux";
const Digicart = () => {
  const dispatch = useDispatch();

  const [loc, setloc] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("selection")) {
      const select = JSON.parse(localStorage.getItem("selection"));
      setloc(select);
    }
  }, []);

  const delethandler = () => {
    const findid = loc.findIndex((item) => {
      return item.id === 0;
    });
    const newloc = [...loc];
    newloc.splice(findid, 1);
    setloc(newloc);
    console.log(findid);
    localStorage.clear("selection");

    dispatch(deletcount());
  };

  return loc.length < 1 ? (
    <div className="digicart">
      <h6>در حال حاضر سبد خرید شما خالی است</h6>
      <img src="../images/digicart/empty-cart.svg" alt="" />
    </div>
  ) : (
    <div>
      {loc.map((loc) => (
        <>
          <div key={loc.id} className="cart-items">
            <div className="img-carts">
              <img src={`../${loc.url}`} alt="" />
            </div>
            <div className="price-carts">
              <span>{loc.price}</span>
              <span>تومان</span>
            </div>
            <div className="btn-carts">
              <button
                className="btn btn-danger w-100"
                onClick={() => delethandler()}
              >
                delet cart
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Digicart;
