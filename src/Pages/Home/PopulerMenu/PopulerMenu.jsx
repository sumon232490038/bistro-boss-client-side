import ItemsMenu from "../../Shared/ItemsMenu/ItemsMenu";
import useMenu from "../../../Hooks/MenuHook/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const items = menu.filter((product) => product.category === "popular");

  return (
    <section className="flex flex-col items-center">
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {items.map((item) => (
          <ItemsMenu key={item._id} item={item}></ItemsMenu>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4  mb-9">
        View All Menu
      </button>
    </section>
  );
};

export default PopulerMenu;
