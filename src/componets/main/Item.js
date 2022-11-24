import ItemComponet from "./componetParent/ItemComponet";

const Item = () => {
  return (
    <div className="item">
      <ItemComponet url={"../images/itemsmall/item1.png"} text={"دیجی جت"} />
      <ItemComponet
        url={"../images/itemsmall/item2.png"}
        text={"حراج استایل"}
      />
      <ItemComponet
        url={"../images/itemsmall/item3.png"}
        text={"دیجی بیزینس"}
      />
      <ItemComponet
        url={"../images/itemsmall/item4.png"}
        text={"خرید اقساطی"}
      />
      <ItemComponet
        url={"../images/itemsmall/item5.png"}
        text={"دیجی موبایل"}
      />
      <ItemComponet url={"../images/itemsmall/item6.png"} text={"دیج مارکت"} />
      <ItemComponet url={"../images/itemsmall/item7.png"} text={"چرخ وبخت"} />

      <figure className="more">
        <div>
          <i className="fa fa-plus"></i>
        </div>
        <figcaption>
          <span> بیشتر</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Item;
