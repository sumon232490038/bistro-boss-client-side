import Cover from "../../Shared/Cover/Cover";
import ItemsMenu from "../../Shared/ItemsMenu/ItemsMenu";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <section className="flex flex-col items-center">
      {title && <Cover coverImg={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {items.map((item) => (
          <ItemsMenu key={item._id} item={item}></ItemsMenu>
        ))}
      </div>
      <Link to={title ? `/order/${title}` : "/order/SALAD"}>
        <button className="btn btn-outline border-0 border-b-4  mb-9 uppercase">
          order your favourite food
        </button>
      </Link>
    </section>
  );
};

export default MenuCategory;
