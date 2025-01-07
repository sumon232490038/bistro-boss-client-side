const ItemsMenu = ({ item }) => {
  const { category, image, name, price, recipe } = item;
  return (
    <div className="flex gap-5 ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h1 className="text-2xl">{name}-----------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-700">${price}</p>
    </div>
  );
};

export default ItemsMenu;
