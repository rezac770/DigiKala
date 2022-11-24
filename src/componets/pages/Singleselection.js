import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { singleslection, single, increment } from "../toolkit/selectionSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Singleselection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleselect = useSelector(single);
  const [cart, setCatr] = useState([]);
  useEffect(() => {
    dispatch(singleslection(id));

    if (localStorage.getItem("selection")) {
      const carts = JSON.parse(localStorage.getItem("selection"));
      setCatr(carts);
    }
    // eslint-disable-next-line
  }, []);

  const addloc = () => {
    const { id, price, url } = singleselect;

    const newcart = [...cart];
    newcart.push({ id: id, price: price, url: url });
    setCatr(newcart);
    console.log(newcart);
    localStorage.setItem("selection", JSON.stringify(newcart));
    dispatch(increment());
  };
  return (
    <div className="parent-single-select">
      <div className="select-single-page">
        <img src={`../../${singleselect.url}`} alt="" />
        <span>{singleselect.discription}</span>
        <span>قیمت</span>
        <span>{singleselect.price}</span>
      </div>
      <button
        className="btn btn-success"
        onClick={() => addloc()}
        type="button"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default Singleselection;
