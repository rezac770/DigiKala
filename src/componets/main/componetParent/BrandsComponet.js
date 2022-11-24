const BrandsComponet = ({ item }) => {
  return (
    <div className="box-img-brand">
      <img src={item.url} alt={item.url} />
    </div>
  );
};

export default BrandsComponet;
