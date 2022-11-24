import BrandsComponet from "../main/componetParent/BrandsComponet";
const Brands = () => {
  const brands = [
    {
      id: "0",
      url: "../images/brands/pic0.png",
    },
    {
      id: "1",
      url: "../images/brands/pic1.png",
    },
    {
      id: "2",
      url: "../images/brands/pic2.png",
    },
    {
      id: "3",
      url: "../images/brands/pic3.png",
    },
    {
      id: "4",
      url: "../images/brands/pic4.png",
    },
    {
      id: "5",
      url: "../images/brands/pic5.png",
    },
    {
      id: "6",
      url: "../images/brands/pic6.png",
    },
    {
      id: "8",
      url: "../images/brands/pic8.jpg",
    },
    {
      id: "9",
      url: "../images/brands/pic9.png",
    },
    {
      id: "10",
      url: "../images/brands/pic10.jpg",
    },
    {
      id: "11",
      url: "../images/brands/pic11.png",
    },
  ];
  return (
    <div className="brands">
      <div className="title-brands">
        <i className="fa fa-star"></i>
        <h5>محبوب ترین برندها</h5>
      </div>
      <div className="box-brand">
        {brands.map((item, index) => (
          <BrandsComponet key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
