import { useState } from "react";
import Modalmap from "./Modalmap";

const Map = () => {
  const [showmap, setShowmap] = useState(false);
  const showmaphandler = () => {
    setShowmap(!showmap);
  };
  return (
    <div className="set-map" onClick={() => showmaphandler()}>
      <div className="icon-map">
        <i className="fa fa-map-marker-alt"></i>
        <span>شهر خود را انتخاب کنید</span>
      </div>
      {showmap && <Modalmap />}
    </div>
  );
};

export default Map;
