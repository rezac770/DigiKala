import Digi3d from "../Digi3d";
import Support from "../support/Support";

import Amazing from "./Amazing";
import Banner from "./Banner";
import BannerSingle from "./BannerSingle";
import BestSelling from "./BestSelling";
import Brands from "./Brands";
import Card from "./Card";
import DigiClubs from "./DigiClubs";
import Digiplus from "./Digiplus";
import Item from "./Item";
import Lastbanner from "./LastBanner";
import Offer from "./Offer";
import Products from "./Products";
import Reading from "./Reading";
import Seeuser from "./SeeUser";
import Selection from "./Selection";
import Slidercenter from "./SliderCenter";
import Viweusers from "./Viweusers";

const RooterMain = () => {
  return (
    <div id="container">
      <Item />
      <Slidercenter />
      <Digi3d />
      <Amazing />
      <Card />
      <Products />
      <Banner />
      <Offer />
      <Brands />
      <Lastbanner />
      <Seeuser />
      <DigiClubs />
      <Digiplus />
      <Viweusers />
      <BestSelling />
      <BannerSingle />
      <Selection />
      <Reading />
      <Support />
    </div>
  );
};

export default RooterMain;
