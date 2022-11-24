import { useState } from "react";
import ModalSupport from "./ModalSupport";

const Support = () => {
  const [activ, setActive] = useState("active");
  const [show, setShow] = useState(false);
  const activehandler = () => {
    setActive(!activ);
    setShow(!show);
  };
  return (
    <div className="Support" onClick={() => activehandler()}>
      <i
        className="fa fa-headset"
        style={activ ? { display: "block" } : { display: "none" }}
      ></i>
      <strong
        style={activ ? { display: "none" } : { display: "block" }}
        className="active"
      >
        &times;
      </strong>
      {show && <ModalSupport />}
    </div>
  );
};

export default Support;
