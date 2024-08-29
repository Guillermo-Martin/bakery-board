function ItemCard({ itemName, itemPrice, itemImg, imgAlt }) {
  return (
    <div>
      <div>
        <img src={itemImg} alt={imgAlt} />
      </div>
      <h3>{itemName}</h3>
      <p>{itemPrice}</p>
    </div>
  );
};

export default ItemCard;
