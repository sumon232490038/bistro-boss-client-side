import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/MenuHook/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
  const params = useParams();
  const itemTabs = ["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"];
  const initialindex = itemTabs.indexOf(params.id);
  const [tabIndex, setTabIndex] = useState(initialindex);

  const [menu] = useMenu();
  const drinks = menu.filter((product) => product.category === "drinks");
  const desserts = menu.filter((product) => product.category === "dessert");
  const pizzas = menu.filter((product) => product.category === "pizza");
  const soups = menu.filter((product) => product.category === "soup");
  const salads = menu.filter((product) => product.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Order</title>
      </Helmet>
      {/* Menu cover */}
      <Cover coverImg={orderCoverImg} title={"ORDER FOOD"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <OrderTabs items={salads}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizzas}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soups}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={desserts}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
