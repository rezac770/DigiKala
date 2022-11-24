const ItemComponet = ({ url, text }) => {
  return (
    <figure>
      <div>
        <img src={url} alt={"digi"} />
      </div>
      <figcaption>
        <span>
          <strong>{text}</strong>
        </span>
      </figcaption>
    </figure>
  );
};

export default ItemComponet;
