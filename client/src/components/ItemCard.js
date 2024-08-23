function ItemCard({ itemName, itemDesc, itemPrice, itemImg, imgAlt }) {
  return (
    <div>
      <div>
        <img src={itemImg} alt={imgAlt} />
      </div>
      <h3>{itemName}</h3>
      <p>{itemDesc}</p>
      <p>{itemPrice}</p>
    </div>
  );
};

export default ItemCard;
