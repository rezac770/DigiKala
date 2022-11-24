import "./App.css";
import "./3D.css";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./componets/toolkit/store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./componets/header/Header";
import SliderWrapper from "./componets/main/SliderWrapper";
import RooterMain from "./componets/main/RooterMain";
import Footer from "./componets/footer/Footer";
import Headres from "./componets/header/Headres";
import Notfound from "./componets/pages/Notfound";
import Digicart from "./componets/pages/Digicart";
import Sectionpage from "./componets/pages/Sectionpage";
import Singleselection from "./componets/pages/Singleselection";
import Mdallog from "./componets/login/Mdallog";
import {} from "./componets/main/Slider";

function App() {
  const [showmadl, setShowmodal] = useState(false);
  const modalhandler = () => {
    setShowmodal(!showmadl);
  };
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Headres />
          <Header modalhandler={modalhandler} />
          {showmadl && <Mdallog modalhandler={modalhandler} />}
          <Routes>
            <Route
              index={true}
              path="/"
              element={
                <>
                  <SliderWrapper />
                  <RooterMain />
                </>
              }
            />
            <Route path="/digi/all/section" element={<Sectionpage />} />
            <Route
              path="/digi/item/selection/:id"
              element={<Singleselection />}
            />
            <Route path="/digi/cart" element={<Digicart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
