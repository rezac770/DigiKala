const AmazingComponet = ({ url, persent }) => {
  return (
    <div className="amazing-box-img">
      <img src={url} alt={"محصولات شگفت انگیز"} />
      <div className="persent-amazing">
        <p className="box-amazing">{persent}</p>
      </div>
    </div>
  );
};

export default AmazingComponet;
